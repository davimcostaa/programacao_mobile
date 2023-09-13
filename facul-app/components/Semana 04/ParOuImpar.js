import { StyleSheet, Text, View } from 'react-native'
import React from 'react'

export default function ParOuImpar(props) {
    const numero = props.numero
    let resultado = ''

    if (numero % 2 === 0) {
        resultado = 'Par'
    } else {
        resultado = 'Impar'
    }

  return (
    <View>
      <Text style={{fontSize: 30}}>O número é</Text>
      <Text style={{fontSize: 30}}>{numero % 2 === 0 ? 'Par' : 'Impar'}</Text>
    </View>
  )
}

const styles = StyleSheet.create({})