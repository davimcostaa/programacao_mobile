import React from 'react'
import { StyleSheet, Text } from 'react-native'

const MeuComponente = () => {
  return (
    <Text style={styles.texto}>MeuComponente</Text>
  )
}

export default MeuComponente

const styles = StyleSheet.create({

  texto: {
    fontSize: 20,
    color: 'black',
    marginBottom: 50,
    backgroundColor: 'white',
    fontFamily: 'Roboto'
  },

});
