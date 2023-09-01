import { StatusBar } from 'expo-status-bar';
import { useState } from 'react';
import { Button, Image, StyleSheet, Text, TouchableOpacity, View } from 'react-native';
import imagemBiscoitoFechado from './assets/biscoito-fechado.png';
import imagemBiscoitoAberto from './assets/biscoito-aberto.png';
export default function App() {

  const [quebrarBiscoito, setQuebrarBiscoito] = useState(false) 


  return (
    <View style={styles.container}>
          <Image
            style={styles.image}
            source={quebrarBiscoito ? imagemBiscoitoAberto : imagemBiscoitoFechado}
          />

          <TouchableOpacity style={styles.botao} onPress={() => setQuebrarBiscoito(true)}>
            <Text style={styles.textoBotao}>Quebrar Biscoito</Text>
          </TouchableOpacity>

          <TouchableOpacity style={styles.botao} onPress={() => setQuebrarBiscoito(false)}>
            <Text style={styles.textoBotao}>Reiniciar Biscoito</Text>
          </TouchableOpacity>

    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },

  image: {
    width: 300,
    height: 300,
    marginBottom: 60
  },

  botao: {
    backgroundColor: "#dba740",
    borderRadius: 10,
    paddingTop: 10,
    paddingVertical: 10,
    paddingHorizontal: 12,
    width: 180,
    marginBottom: 20
  },

  textoBotao: {
    fontSize: 18,
    color: "#fff",
    fontWeight: "bold",
    alignSelf: "center",
  }
});
