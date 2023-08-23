import { Alert, Button, ImageBackground, StyleSheet, Text, View } from 'react-native';
import { Image } from 'expo-image';
import MeuComponente from './components/MeuComponente';
import MinMax from './components/MinMax';

export default function App() {
  return (
    <View style={styles.container}>
      <ImageBackground
      source={require('./assets/background.jpg')} style={styles.imageBackground}
      >
          <Text style={styles.texto}>Seja bem-vindo (a)</Text>
      <Image
            style={styles.image}
            source={require('./assets/lua.png')}
          />

          <Button
          title="Clique aqui"
          onPress={() => Alert.alert('Se a lua toca no mar...')}
          />
          <MeuComponente style={styles.texto} />
          <MinMax min='50' max='50' />
      </ImageBackground>

    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#75ae97',
    alignItems: 'center',
    justifyContent: 'center',
  },
  
  image: {
    width: 300,
    height: 300,
  },

  texto: {
    fontSize: 20,
    color: 'black',
    marginBottom: 50,
    backgroundColor: 'white',
    fontFamily: 'Roboto'
  },

  imageBackground: {
    flex: 1,
    resizeMode: "cover",
    justifyContent: "center",
    alignItems: "center",
    width: '100%'
  },
});
