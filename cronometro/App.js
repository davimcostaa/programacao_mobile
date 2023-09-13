import React, { useState, useEffect } from 'react';
import { StyleSheet, Text, View, TouchableOpacity } from 'react-native';
import { useFonts, Orbitron_400Regular } from '@expo-google-fonts/orbitron';

export default function App() {
  const [segundos, setSegundos] = useState(0);
  const [minutos, setMinutos] = useState(0);
  const [horas, setHoras] = useState(0);
  const [isRunning, setIsRunning] = useState(false);
  const [ultimosTempos, setUltimosTempos] = useState('');
  let timer = null;

  useEffect(() => {
    if (isRunning) {
      timer = setInterval(() => {
        setSegundos((segundoAnterior) => {
          if (segundoAnterior === 59) {
            setMinutos((minutoAnterior) => {
              if (minutoAnterior === 59) {
                setHoras((horaAnterior) => horaAnterior + 1);
                return 0;
              } else {
                return minutoAnterior + 1;
              }
            });
            return 0;
          } else {
            return segundoAnterior + 1;
          }
        });
      }, 1000);
    } else {
      clearInterval(timer);
    }

    return () => clearInterval(timer);
  }, [isRunning]);


  let [fontsLoaded] = useFonts({
    Orbitron_400Regular,
  });

  if (!fontsLoaded) {
    return null;
  }

  function iniciarCronometro() {
    setIsRunning(true);
  }

  function pararCronometro() {
    setIsRunning(false);
  }

  function reiniciarCronometro() {
    setUltimosTempos(
      `${horas < 10 ? `0${horas}` : horas}:${minutos < 10 ? `0${minutos}` : minutos}:${segundos < 10 ? `0${segundos}` : segundos}`
    );
    clearInterval(timer);
    setIsRunning(false);
    setHoras(0);
    setMinutos(0);
    setSegundos(0);
    setIsRunning(true);
  }

  return (
    <View style={styles.container}>
      <Text style={{ fontFamily: 'Orbitron_400Regular', fontSize: 50, color: '#36BA01' }}>
        {`${horas < 10 ? `0${horas}` : horas}:${minutos < 10 ? `0${minutos}` : minutos}:${segundos < 10 ? `0${segundos}` : segundos}`}
      </Text>
      <View style={styles.botoes}>
        <TouchableOpacity style={styles.botao} onPress={isRunning ? pararCronometro : iniciarCronometro}>
          <Text style={styles.textoBotao}>{isRunning ? 'Parar' : 'Iniciar'}</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.botao} onPress={reiniciarCronometro}>
          <Text style={styles.textoBotao}>Reiniciar</Text>
        </TouchableOpacity>
      </View>
      <Text style={{ fontFamily: 'Orbitron_400Regular', fontSize: 20, color: '#36BA01', marginTop: 35 }}>
        {`Último tempo: ${ultimosTempos}`}
      </Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'black',
    alignItems: 'center',
    justifyContent: 'center',
  },

  botoes: {
    flexDirection: 'row',
    gap: 20,
    marginTop: 45,
  },

  botao: {
    backgroundColor: 'white',
    borderRadius: 100,
    paddingTop: 10,
    paddingVertical: 10,
    paddingHorizontal: 12,
    width: 120,
    marginBottom: 20,
    borderColor: 'white',
    borderWidth: 1,
  },

  textoBotao: {
    fontSize: 18,
    color: '#000',
    fontWeight: 'bold',
    alignSelf: 'center',
  },
});
