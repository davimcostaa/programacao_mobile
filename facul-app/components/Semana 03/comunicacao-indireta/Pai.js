import { View, Text } from 'react-native'
import React, { useState } from 'react'
import Filho from './Filho'

const Pai = () => {
  const [numeroAleatorio, setNumeroAleatorio] = useState()
  return (
    <View>

      <Text>O número aleratório é:</Text>
      <Text>{numeroAleatorio}</Text>
      <Filho max={1} min={60} state={numeroAleatorio} setNumeroAleatorio={setNumeroAleatorio} />
      
    </View>
  )
}

export default Pai