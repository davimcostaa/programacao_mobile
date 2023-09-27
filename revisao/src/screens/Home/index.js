
import { useEffect, useState } from 'react'
import Api from '../../services/Api'
import { Avatar, Card, IconButton } from 'react-native-paper';
import { FlatList, StyleSheet, View } from 'react-native'
import CardUsuario from './CardUser';

const Home = ({ navigation }) => {

    const [usuarios, setUsuarios] = useState([])

    useEffect(() => {

        Api.get('/users')
            .then(response => {
                setUsuarios(response.data.users)
            })
            .catch(error => {
                console.log("Erro na chamada ", error)
            })

    }, [])

    return (
        <View style={styles.container}>

        <FlatList
            style={styles.listArea}
            showsVerticalScrollIndicator={false}
            data={usuarios}
            renderItem={({ item }) => 
               <CardUsuario 
                    nome={item.firstName}
                    sobrenome={item.lastName}
                    imagem={item.image}  
                    navigation={navigation}
                    username={item.username}  
                    user={item.id}
                />
              
          }
        />

    </View>
 
  )
}

export default Home

const styles = StyleSheet.create({
    container: {
        backgroundColor: "#1A1A2F"
    }
})