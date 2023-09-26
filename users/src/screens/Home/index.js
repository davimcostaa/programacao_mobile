
import { useEffect, useState } from 'react'
import Api from '../../services/Api'
import { Avatar, Card, IconButton } from 'react-native-paper';
import { FlatList, StyleSheet, View } from 'react-native'
import CardUsuario from './Card';

const Home = ({ navigation, route }) => {

    const [usuarios, setUsuarios] = useState([])

    useEffect(() => {

        Api.get('/users')
            .then(response => {
                setUsuarios(response.data.users)
            })
            .catch(error => {
                console.log("DEU ERRO NA CHAMDA DE CATEGORIAS: ", error)
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
                    user={item.id}
                />
              
          }
        />

    </View>
 
  )
}

export default Home

const styles = StyleSheet.create({
    listArea: {
        
    }
})