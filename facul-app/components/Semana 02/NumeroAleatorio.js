import { useState } from "react";
import { Button, StyleSheet, Text } from "react-native";

export default function NumeroAleatorio({min, max}) {

    const [numeroAleatorio, setNumeroAleatorio] = useState('')
    
    const geraNumero = () => {
      setNumeroAleatorio(parseInt(Math.random() * (max - min) + min))
    }

    //const numeroAleatorio = parseInt(Math.random() * (max - min) + min)

    return (
      <>
        <Button onPress={geraNumero} title='Gerar número aleatório'></Button>
        <Text style={styles.texto}>O numero aleatório é: {numeroAleatorio}</Text>
      </>      
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
