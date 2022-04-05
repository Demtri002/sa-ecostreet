import React, { useState, useEffect } from 'react'
import { View, Button, Text, Image, TouchableOpacity } from 'react-native'
import { ScrollView } from 'react-native-gesture-handler'
import { SafeAreaView } from 'react-native-safe-area-context'
import { useUser } from '../content/context'
import SemDenuncia from '../components/SemDenuncia'
import ComDenuncia from '../components/ComDenuncia'

import styles from '../styles/suasDenuncias'

const SuasDenuncias = ({ navigation }) => {
     const[denunciaArray, setdenunciaArray] = useState([])
    const { userLogado, setUserLogado,setDenuncia, denuncia } = useUser()

    const denunciasUsuario = async (req, res) => {
            console.log("FRONT iduser:" + userLogado.id)
            
            const denuncias = await fetch("http://10.0.0.142:3000/denuncia/" + userLogado.id)
            const dadosJson = await denuncias.json()
            console.warn(dadosJson.length)
            console.log(dadosJson.length)
            
           setDenuncia(dadosJson)
    }

    const getDenuncia = async () => {
        try {
            const denuncias = await fetch("http://10.0.0.142:3000/denuncia")
            const json = await denuncias.json()
            // setData(json)
    
        } catch (error) {
            console.error(error)
        } finally {
            // console.log('to aq');
    
        }
    
    }
    
    useEffect(() =>{
        getDenuncia()
        denunciasUsuario()
    }, [])

    console.log("teste",denuncia);
    
    return (
        <SafeAreaView>
            <ScrollView>
                <View style={styles.container}>
                <View style={styles.flex}>

            <Text style={styles.textHeader}>Suas denúncias</Text>

                <TouchableOpacity onPress={() => navigation.openDrawer()}>
               
               <Image
                   source={require('../assets/Group.png')} style={styles.openDrawer}
                   resizeMode='contain'
               />
           
       </TouchableOpacity>

</View>
                        {denuncia.length == 0 ? <SemDenuncia /> : <ComDenuncia/>}
                    

                        <TouchableOpacity onPress={() => navigation.navigate('Categoria')} style={styles.img}>
                        <Image
                            source={require('../assets/add-denuncia.png')}
                            resizeMode='contain'
                            style={styles.addButton}
                        />
                    </TouchableOpacity>
                        </View>
            </ScrollView>
        </SafeAreaView>
    )
}

export default SuasDenuncias