import { FlatList, StyleSheet, Text, View } from 'react-native'
import React, { useEffect, useState } from 'react'
import { Card } from 'react-native-paper'
import Api from '../../services/Api'

export default function Posts(props) {

    const postsRecebido = props.route.params 
    const [posts, setPosts] = useState([]) 

    useEffect(() => {

        Api.get(`/users/${postsRecebido}/posts`)
            .then(response => {
                setPosts(response.data.posts)
            })
            .catch(error => {
                console.log("Erro: ", error)
            })
  
    }, [])

  return (
    <View style={styles.container}>
        <FlatList
            showsVerticalScrollIndicator={false}
            data={posts}
            renderItem={({ item }) =>  
            <Card style={styles.card} >
                <Card.Content>
                    <Text variant="titleLarge"  style={styles.text}>{item.title}</Text>
                    <Text variant="bodyMedium"  style={styles.text}>{item.body}</Text>
                </Card.Content>
            </Card>
          }
    />
    </View>
  )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#1A1A2F'
      },

      card: {
        marginTop: 15,
        backgroundColor: '#242443',
      },

      text: {
        color: '#fff',
      }
})