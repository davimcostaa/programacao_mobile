import { FlatList, StyleSheet, Text, View } from 'react-native'
import React from 'react'
import usuarios from '../../mocks/users.json'
import Pessoa from './componentes/Pessoa'

export default function Home() {
  return (
    <View>
    <Text style={{fontSize: 50}}> Home </Text>

      <FlatList 
      data={usuarios}
      renderItem={({item}) => <Pessoa pessoa={item} />}
      /> 
    </View>
  )
}

const styles = StyleSheet.create({

})