import React, { useState } from 'react'
import { Button, StyleSheet, Text, TextInput, View } from 'react-native'

const DigiteSeuNome = () => {
    const [nome, setNome] = useState('')
    const [nomeDisplay, setNomeDisplay] = useState('')

    function mostraNome() {
        setNomeDisplay(nome)
    }
    
  return (
    <View style={styles.container}>
        <Text>Digite seu nome</Text>

        <TextInput style={styles.input} onChangeText={setNome} />
        <Text>{nomeDisplay}</Text>

        <Button title='Enviar' onPress={mostraNome}/>
        
    </View>
  )
}

export default DigiteSeuNome

const styles = StyleSheet.create({
    container: {
      flex: 1,
      alignItems: 'center',
      justifyContent: 'center',
      marginBottom: 10
    },
    
    input: {
        fontSize: 20,
        color: 'red',
        borderWidth: 2,
        margin: 2,
        width: 200
    },

    text: {
      fontSize: 20,
      color: 'black',
      marginBottom: 50,
      backgroundColor: 'white',
      fontFamily: 'Roboto'
    },

  });