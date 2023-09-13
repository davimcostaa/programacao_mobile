import { Alert, ImageBackground, StyleSheet, Text, View } from 'react-native';
import { Image } from 'expo-image';
import MinMax from './components/Semana 01/MinMax';
import NumeroAleatorio from './components/Semana 02/NumeroAleatorio';
import Contador from './components/Semana 02/Contador';
import DigiteSeuNome from './components/Semana 02/DigiteSeuNome';
import Pai from './components/Semana 03/comunicacao-indireta/Pai';
import ParOuImpar from './components/Semana 04/ParOuImpar';
import IntroducaoEstilos from './components/Semana 04/IntroducaoEstilos';
import Profile from './components/Semana 04/Profile';
import Login from './components/Semana 04/Login';
import { ActivityIndicator, Button, MD2Colors } from 'react-native-paper';
// import Pai from './components/Semana 03/comunicacao-direta/Pai';

export default function App() {
  return (
    // <View style={styles.container}>
    //   {/* <ImageBackground
    //   source={require('./assets/background.jpg')} style={styles.imageBackground}
    //   >
    //       <Text style={styles.texto}>Seja bem-vindo (a)</Text>
    //   <Image
    //         style={styles.image}
    //         source={require('./assets/lua.png')}
    //       />

    //       <Button
    //       title="Clique aqui"
    //       onPress={() => Alert.alert('Se a lua toca no mar...')}
    //       />
  
    //       <MinMax min='50' max='50' />
    //       <MinMax min={30} max={40} />

    //       <NumeroAleatorio min={10} max={15} />
    //   </ImageBackground> */}
    // {/* 
    //   <Contador />
    //   <DigiteSeuNome/> */}
    // {/* 
    //   <ParOuImpar numero={10} /> */}
    //   {/* <IntroducaoEstilos /> */}

    //   <Profile
    //     imgUri='https://www.fakepersongenerator.com/Face/female/female20161024753601562.jpg'
    //     genero='Feminino'
    //     nome='Felicia J Ochoa'
    //     email='aiyana1980@gmail.com'
    //     telefone='630-337-6439'
    // />

    // </View>
    // <Profile
    //   imgUri='https://www.fakepersongenerator.com/Face/male/male20171084057929504.jpg'
    //   genero='Masculino'
    //   nome='FTheodore M Weidman'
    //   email='niko2002@yahoo.com'
    //   telefone='903-513-5297'
    // />
    <>
      <ActivityIndicator animating={true} color={MD2Colors.red200} size={'large'} style={{marginTop: 100}} />

      <Button icon="camera" mode="contained" onPress={() => console.log('Pressed')}>
    Press me
  </Button>
    </>
  
 
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
