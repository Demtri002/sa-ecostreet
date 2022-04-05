import React, {useState, useEffect} from 'react';
import {View, Text, TouchableOpacity, Image, TextInput, ScrollView ,ActivityIndicator, FlatList} from 'react-native';
import styles from '../styles/usuario'
import { useUser } from '../content/context'

const Usuario = ({navigation}) => {
    
    const [isLoading, setLoading] = useState(true)
    const [data, setData] = useState([])
    const { userLogado, setUserLogado } = useUser()
   
    const getUsersByID = async () => {
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
        getUsersByID()
    }, [])

    const updateUser = async (id) => {
        const requestOptions = {
            method: 'DELETE',
            header: { 'Content-type': 'application/json' }
        }

        try{

            console.log("ID:" + id)
            await fetch('http://10.0.0.142:3000/users/' + id, requestOptions)
            setData(data.filter(user => user.id != id))
        }catch (error) {
            console.error(error)
        }finally{
            setLoading(false)
        }
    }
    


    
        return(
            <ScrollView>
            <View style={styles.container}>
            
            <View style={styles.flex}>
    
            <Text style={styles.textHeader}>Meu perfil</Text>
    
            <TouchableOpacity onPress={() => navigation.openDrawer()}>
    
            <Image
            source={require('../assets/Group.png')} style={styles.openDrawer}
            resizeMode='contain'
                />
    
            </TouchableOpacity>
    
            </View>
    
                <Text style={styles.title}>Gerencie seus dados pessoais: </Text>
              
            
                    <Text style={styles.subtitle}>{userLogado.nome} {userLogado.sobrenome}</Text>
                
         
                <View style={styles.content}>
                <TextInput style={styles.input} placeholder='Nome:' ></TextInput>
                <TextInput style={styles.input} placeholder='Sobrenome:' ></TextInput>
                <TextInput style={styles.input} placeholder='Digite sua nova senha: ' ></TextInput>
                <TextInput style={styles.input} placeholder='Confirme sua nova senha:'></TextInput> 
                </View>
                
                  
                   
                   <TouchableOpacity style={styles.button}>
                        <Text style={styles.textButton}>Atualizar</Text>
                   </TouchableOpacity>
                  
            </View>
            </ScrollView>
        )
}

export default Usuario