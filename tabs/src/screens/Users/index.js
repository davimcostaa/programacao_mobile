import React, { useEffect, useState } from 'react'
import { Avatar, Card, IconButton } from 'react-native-paper'
import { FlatList, ScrollView, Text, View } from 'react-native';
import Api from '../../services/Api'

const Users = () => {

    const [users, setUsers] = useState([])

    useEffect(() => {
      Api.get('users')
        .then((response) => {
          setUsers(response.data.users)
        }).catch((error) => {
          console.log(error)
        })
    }, [])
console.log(users)
  return (
    <>
        <ScrollView>
        {users.map((item) => (
             <Card key={item.id}>
                <Card.Title
                    title={item.username}
                    subtitle={item.email}
                    left={() => <Avatar.Image size={48} source={{ uri: item.image }} />}
                />
            </Card>
        ))}
        </ScrollView>
    </>
    


  )
}

export default Users