import { View, Text } from 'react-native'
import React from 'react'
import Filho from './Filho'

const Pai = () => {
  return (
    <View>
      <Filho nome="Nome" sobrenome="Davi" />
    </View>
  )
}

export default Pai