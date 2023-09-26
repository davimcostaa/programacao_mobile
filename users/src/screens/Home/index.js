
import { useEffect, useState } from 'react'
import Api from '../../services/Api'
import { Avatar, Card, IconButton } from 'react-native-paper';
import { FlatList, StyleSheet, View } from 'react-native'

const Home = () => {

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

    console.log(usuarios)
    return (
        <View style={styles.container}>

        <FlatList
            style={styles.listArea}
            showsVerticalScrollIndicator={false}
            data={usuarios}
            renderItem={({ item }) => 
                <Card.Title
                style={{backgroundColor: '#665a6f', marginTop: 10}}
                title={`${item.firstName} ${item.lastName}`}
                titleStyle={{color: '#fff'}}
                subtitle="Card Subtitle"
                left={() => <Avatar.Image size={45} source={{ uri: item.image }} />}
                right={() => <Avatar.Icon icon="arrow-right" />}
              
          />}
        />

    </View>
 
  )
}

export default Home

const styles = StyleSheet.create({
    listArea: {
        
    }
})