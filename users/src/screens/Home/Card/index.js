
import React from 'react'
import { Avatar, Button, Card, IconButton } from 'react-native-paper';


const CardUsuario = ({nome, sobrenome, imagem, navigation, user}) => {

    function navegarParaUsuario() {
        navigation.navigate('User', user)
    }

  return (
       <Card.Title
                style={{backgroundColor: '#665a6f', marginTop: 10}}
                title={`${nome} ${sobrenome}`}
                titleStyle={{color: '#fff'}}
                subtitle="Card Subtitle"
                left={() => <Avatar.Image size={45} source={{ uri: imagem }} />}
                right={() => <Button icon="arrow-right" size={30} mode="contained" onPress={navegarParaUsuario} /> } />
  )
}

export default CardUsuario