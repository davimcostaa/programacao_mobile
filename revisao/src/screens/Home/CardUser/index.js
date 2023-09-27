
import React from 'react'
import { Avatar, Button, Card, IconButton } from 'react-native-paper';


const CardUsuario = ({nome, sobrenome, imagem, username, navigation, user}) => {

    function navegarParaUsuario() {
        navigation.navigate('User', user)
    }

  return (
       <Card.Title
                style={{backgroundColor: '#242443', marginTop: 20}}
                title={`${nome} ${sobrenome}`}
                titleStyle={{color: '#fff'}}
                subtitle={`@${username}`}
                subtitleStyle={{color: '#fff'}}
                left={() => <Avatar.Image size={45} source={{ uri: imagem }} style={{backgroundColor: 'white'}} />}
                right={() => <Button style={{backgroundColor: '#7A12FF'}} icon="arrow-right" mode="contained" onPress={navegarParaUsuario}>Perfil</Button> } />
  )
}

export default CardUsuario