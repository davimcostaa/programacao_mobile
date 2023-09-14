import { View, Text, Button } from 'react-native'
import React, { useState } from 'react'

const Filho = ({max, min, numeroAleatorio, setNumeroAleatorio}) => {

function gerarNumeroAleatorio() {
  setNumeroAleatorio(parseInt(Math.random() * (max - min + 1)) + min)
}

  return (
    <View>
      <Button title='Enviar' onPress={gerarNumeroAleatorio}  />
    </View>
    
  )
  
}

export default Filho

