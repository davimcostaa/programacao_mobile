import { View, Text } from 'react-native'
import React from 'react'

const Filho = ({nome, sobrenome}) => {
  return (
    <View>
      <Text style={{fontSize: 50}}>{nome} {sobrenome} </Text>
    </View>
  )
}

export default Filho

