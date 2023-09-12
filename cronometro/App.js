import { StatusBar } from 'expo-status-bar';
import { Button, StyleSheet, Text, TouchableOpacity, View } from 'react-native';
import {  useFonts, Orbitron_400Regular } from '@expo-google-fonts/orbitron';
import { useEffect, useState } from 'react';

export default function App() {
  const [seconds, setSeconds] = useState(0)

  let timer;

  useEffect(() => {
    timer = setInterval(() => {
      setSeconds(seconds + 1)
    }, 1000)
  })

  let [fontsLoaded] = useFonts({
    Orbitron_400Regular,
    
  });

  if (!fontsLoaded) {
    return null;
  }


  return (
    <View style={styles.container}>

      <Text style={{ fontFamily: 'Orbitron_400Regular', fontSize: 50, color: '#36BA01' }}>
        00:00:{seconds}
      </Text>
     
     <View style={styles.botoes}>
       <TouchableOpacity style={styles.botao} onPress={() => setQuebrarBiscoito(false)}>
            <Text style={styles.textoBotao}>Iniciar</Text>
      </TouchableOpacity>
      
      <TouchableOpacity style={styles.botao} onPress={() => setQuebrarBiscoito(false)}>
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
    marginTop: 45
  },

  botao: {
    backgroundColor: "white",
    borderRadius: 100,
    paddingTop: 10,
    paddingVertical: 10,
    paddingHorizontal: 12,
    width: 120,
    marginBottom: 20,
    borderColor: 'white',
    borderWidth: 1
  },

  textoBotao: {
    fontSize: 18,
    color: "#000",
    fontWeight: "bold",
    alignSelf: "center",
  },

  textao: {
    fontFamily: 'Orbitron_400Regular',
    cor: 'white',
    fontSize: 19
  }
});
