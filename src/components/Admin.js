import React, {useEffect, useState} from 'react';
import { View, ActivityIndicator, FlatList, Text, TouchableOpacity } from 'react-native';
import styles from '../styles/admin'
import { useUser } from '../content/context'
import Icon from 'react-native-vector-icons/MaterialCommunityIcons'

const Admin = () => {



    const [isLoading, setLoading] = useState(true)
    const [data, setData] = useState([])
    const { userLogado, setUserLogado } = useUser()
    console.log(data)
    
    const getUsers = async () => {
        try{
            const response = await fetch('http://10.0.0.142:3000/users/')
            const json = await response.json()
            setData(json)
            
        }catch (error) {
            console.error(error)
        }finally{
            setLoading(false)
        }
}

    useEffect(() => {
        getUsers()
    }, [])

  
    
    const getDenuncia = async () => {
        try{
            const response = await fetch('http://10.0.0.142:3000/denuncia/')
            const json = await response.json()
            setData(json)
        }catch (error) {
            console.error(error)
        }finally{
            setLoading(false)
        }
}

    useEffect(() => {
        getDenuncia()
    }, [])
    const deleteDenuncia = async (id) => {
        const requestOptions = {
            method: 'DELETE',
            header: { 'Content-type': 'application/json' }
        }

        try{

            console.log("ID:" + id)
            await fetch('http://10.0.0.142:3000/denuncia/' + id, requestOptions)
            setData(data.filter(user => user.id != id))
        }catch (error) {
            console.error(error)
        }finally{
            setLoading(false)
        }
    }
    return (
        <View style={styles.container}>
          <Text style={styles.title}>Lista de denúncias</Text>
        
        
        <View style={styles.content}>
                    {isLoading  ? <ActivityIndicator /> : (
                        <FlatList style={styles.scrollView}
                            data={data} 
                            keyExtractor={({id} , index) => id} 
                            renderItem={({ item }) => (
                                <View style={styles.container}>
                                
                                <View style={styles.denunciaContainer}>
                                
                                <View style={styles.miniContainer}>
                                    
                                <View style={styles.textContainer}>
                                    <Text style={styles.titleContent}>Identificador da denúncia: </Text>
                                    <Text style={styles.text}>{item.id}</Text>
                                </View>
                                
                              
                            
                                <View style={styles.textContainer}>
                                    <Text style={styles.titleContent}>Título: </Text>
                                    <Text style={styles.text}>{item.titulo}</Text>
                                </View>
                                
                                <View style={styles.textContainerDesc}>
                                    <Text style={styles.titleContent}>Descrição:</Text>
                                    <Text style={styles.text}>{item.descricao}</Text>
                                </View>
                                    
                                <TouchableOpacity
                                        style={styles.deleteButton}
                                        onPress={() => deleteDenuncia(item.id)} >
                                        <Icon name='delete' size={30} color='#FF0000'/>
                                    </TouchableOpacity>
                                </View>
                                </View>
                                </View>
                            
                            )}
                        />
                    )}




        </View>
        </View>
        
        
    )
}

export default Admin