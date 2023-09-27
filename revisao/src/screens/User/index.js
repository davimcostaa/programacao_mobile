import React, { useEffect, useState } from 'react'
import { Avatar, Button, Card, Text } from 'react-native-paper'
import { StyleSheet, View } from 'react-native'
import Api from '../../services/Api'

function User(props) {

  const usuarioRecebido = props.route.params
  const [usuario, setUsuario] = useState([])

  useEffect(() => {

      Api.get(`/users/${usuarioRecebido}`)
          .then(response => {
            setUsuario(response.data)
          })
          .catch(error => {
              console.log("Erro: ", error)
          })

  }, [])

  function navegarParaPosts() {
    props.navigation.navigate('Posts', usuario.id)
  }

  return (
    <View style={styles.container}>
          <Card style={styles.card}>
          <Card.Cover source={{ uri: usuario.image }} />
            <Card.Content>
              <Text variant="titleLarge" style={styles.text} >{usuario.firstName} {usuario.lastName}</Text>
              <Text variant="bodyMedium" style={styles.text}>{usuario.phone}</Text>
              <Text variant="bodyMedium" style={styles.text}>{usuario.birthDate}</Text>
              <Text variant="bodyMedium" style={styles.text}>{usuario.email}</Text>
            </Card.Content>

            <Card.Actions>
            <Button style={styles.text} onPress={navegarParaPosts}>Posts</Button>
          </Card.Actions>
          </Card>
    </View>

  )
}

export default User

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#1A1A2F'
  },
  card: {
    flex: 1,
    paddingTop: 30,
    alignItems: "center",
    backgroundColor: '#242443'
  },

  text: {
    color: '#fff',
    marginTop: 3,
    textAlign: "center"
  }
})