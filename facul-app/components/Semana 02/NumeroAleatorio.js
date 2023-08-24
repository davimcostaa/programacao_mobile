import { StyleSheet, Text } from "react-native";

export default function NumeroAleatorio({min, max}) {

    const numeroAleatorio = parseInt(Math.random() * (max - min) + min)

    return (
        <Text style={styles.texto}>O numero aleatório é: {numeroAleatorio}</Text>
    )
}

const styles = StyleSheet.create({

    texto: {
      fontSize: 20,
      color: 'black',
      marginBottom: 50,
      backgroundColor: 'white',
      fontFamily: 'Roboto'
    },
  
  });
