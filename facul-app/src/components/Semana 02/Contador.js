import { useState } from "react"
import { Button, StyleSheet, Text, View } from "react-native"

const Contador = () => {
   const [valor, setValor] = useState(0)
   
   function incrementar() {
        setValor(valor + 1)
   }

   function decrementar() {
        setValor(valor - 1)
   }

  return (
    <View style={styles.container}>
        <Text style={styles.text}>
            Volume
        </Text>
        <Text style={styles.text}>
            {valor}
        </Text>
        <View>
            <Button title="+ Incrementar" onPress={incrementar} />
            <Button title="- Decrementar" onPress={decrementar} />
        </View>

    </View>
  )
}

export default Contador

const styles = StyleSheet.create({
    container: {
      flex: 1,
      alignItems: 'center',
      justifyContent: 'center',
    },
    
    image: {
      width: 300,
      height: 300,
    },
  
    text: {
      fontSize: 20,
      color: 'black',
      marginBottom: 50,
      backgroundColor: 'white',
      fontFamily: 'Roboto'
    },
  
    imageBackground: {
      flex: 1,
      resizeMode: "cover",
      justifyContent: "center",
      alignItems: "center",
      width: '100%'
    },
  });