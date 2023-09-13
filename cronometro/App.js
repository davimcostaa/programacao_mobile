import { StatusBar } from 'expo-status-bar';
import { Button, StyleSheet, Text, TouchableOpacity, View } from 'react-native';
import { useFonts, Orbitron_400Regular } from '@expo-google-fonts/orbitron';
import { useEffect, useState } from 'react';

export default function App() {
  const [seconds, setSeconds] = useState(0);
  const [minutes, setMinutes] = useState(0);
  let timer = null; // Declare a timer variable

  function iniciarCronometro() {
    if (!timer) {
      timer = setInterval(() => {
        setSeconds((prevSeconds) => {
          if (prevSeconds === 59) {
            // Se os segundos chegarem a 59, incrementar minutos e resetar segundos
            setMinutes((prevMinutes) => prevMinutes + 1);
            return 0;
          } else {
            return prevSeconds + 1;
          }
        });
      }, 1000); 
    }
  }

  function reiniciarCronometro() {
    clearInterval(timer); // Limpa o intervalo
    setMinutes(0); // Reinicia os minutos
    setSeconds(0); // Reinicia os segundos
    timer = null; // Reseta a variável do timer
  }

  let [fontsLoaded] = useFonts({
    Orbitron_400Regular,
  });

  if (!fontsLoaded) {
    return null;
  }

  return (
    <View style={styles.container}>
      <Text style={{ fontFamily: 'Orbitron_400Regular', fontSize: 50, color: '#36BA01' }}>
        {minutes < 10 ? `0${minutes}` : minutes}:{seconds < 10 ? `0${seconds}` : seconds}
      </Text>
      <View style={styles.botoes}>
        <TouchableOpacity style={styles.botao} onPress={iniciarCronometro}>
          <Text style={styles.textoBotao}>Iniciar</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.botao} onPress={reiniciarCronometro}>
          <Text style={styles.textoBotao}>Reiniciar</Text>
        </TouchableOpacity>
      </View>
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

  textao: {
    fontFamily: 'Orbitron_400Regular',
    cor: 'white',
    fontSize: 19,
  },
});
