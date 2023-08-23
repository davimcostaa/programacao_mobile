import React from 'react'
import { StyleSheet, Text } from 'react-native'

const MinMax = ({min, max}) => {

  const maiorNumero = min > max ? min : max 

  return (
    
    <>    
    
    <Text style={styles.texto}>O maior número é: {maiorNumero}</Text>


    </>

  )
}

export default MinMax

const styles = StyleSheet.create({

  texto: {
    fontSize: 20,
    color: 'black',
    marginBottom: 50,
    backgroundColor: 'white',
    fontFamily: 'Roboto'
  },

});
