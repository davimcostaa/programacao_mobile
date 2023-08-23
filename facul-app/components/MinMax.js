import React from 'react'
import { StyleSheet, Text } from 'react-native'

const MinMax = ({min, max}) => {
  return (
    
    <>    
    
    <Text style={styles.texto}>{min}</Text>
    <Text style={styles.texto}>{max}</Text>

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
