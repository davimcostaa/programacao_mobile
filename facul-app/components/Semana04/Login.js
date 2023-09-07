import { Image, StyleSheet, Text, TextInput, View } from 'react-native'
import React from 'react'
import icone from '../../assets/icone.png';

export default function Login() {
  return (
    <View style={styles.container}>
        <View>
            
        </View>
        <Image
            source={icone}
            style={styles.img}
        />

        <Text style={styles.text}>
            Welcome Back
        </Text>

        <Text style={styles.text2}>
        Please Log into your existing account
        </Text>

        <TextInput style={styles.input} placeholder='Your Email' />
 
    </View>
  )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#0A0171',
        alignItems: 'center',
        justifyContent: 'center',
    },
    img: {
        width: 177,
        height: 158
    },
    text: {
        color: 'white',
        fontSize: 25,
        marginTop: 51,
    },
    text2: {
        color: 'white',
        fontSize: 15,
        marginTop: 21,
    },
    input: {
        borderColor: 'white',
        borderRadius: 10,
        marginTop: 20,
        fontSize: 20,
        color: 'red',
        borderWidth: 2,
        margin: 2,
        width: 300,
        height: 50,
        marginBottom: 30
    },
})