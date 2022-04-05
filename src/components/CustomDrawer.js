import React, {useEffect, useState}from "react";
import { View, Text, Image, ImageBackground, ActivityIndicator, FlatList, TextInput} from 'react-native'
import {DrawerContentScrollView, DrawerItemList} from '@react-navigation/drawer'
import { TouchableOpacity } from "react-native-gesture-handler";
import { useUser } from '../content/context'

import Icon from 'react-native-vector-icons/Ionicons'

const CustomDrawer = (props, {navigation}) => {
    const [data, setData] = useState([])
    const [isLoading, setLoading] = useState(true)
    const { userLogado, setUserLogado } = useUser()

    const getLogin = async () => {
        try{
            const response = await fetch('http://localhost:3000/users/')
            const json = await response.json()
            setData(json)
        }catch (error) {
            console.error(error)
        }finally{
            setLoading(false)
        }
}

    useEffect(() => {
        getLogin()
    }, [])


    return(
        <View style={{flex:1}}>
            <DrawerContentScrollView {...props} contentContainerStyle={{backgroundColor:'#002F21'}}> 
            {/* PARTE DE CIMA DO DRAWER */}
                <View style={{backgroundColor:'#fff', padding:15, flexDirection:'row', alignItems: 'center', flexWrap: 'wrap'}}>
                   
                    <View style={{width: 290, height: 130,  flexDirection:'row', alignItems: 'center',}}>
                    <ImageBackground
                            source={require('../assets/bgdrawer.png')}
                            
                            style={{width: 290, height: 120, position: 'absolute'}}
                        />
                    <Image source={require('../assets/Drawer.png')} style={{height:60, width:60, marginLeft: 10}}
                    resizeMode='contain'/>
                    <Text style={{color:'#000'}}>
                        <View style={{flexWrap: 'wrap', }}>
                            <Text style={{fontSize:16, textAlign: 'center', marginLeft: 5}}> {userLogado.nome} {userLogado.sobrenome}</Text>
                        </View>
                        
                </Text>
                </View>
                </View>
                <View style={{flex:1, backgroundColor:'#fff'}}>
                <DrawerItemList {...props}/>
                </View>
            </DrawerContentScrollView>
            {/* PARTE DE BAIXO DO DRAWER */}
    
            <View style={{padding:10, borderTopWidth:1, borderTopColor: '#ccc', backgroundColor:'#B1B7B5'}}>
            <TouchableOpacity onPress={() => {}} style={{paddingVertical:15}}>
                <View style={{flexDirection:'row', alignItems:'center'}}>
                <Icon name='exit' size={30} style={{marginLeft: 10}}/>
                <Text style={{fontSize:16, marginLeft: 5}}>Sair</Text>
                </View>
            </TouchableOpacity>
            </View>
        </View>
            

    )
}

export default CustomDrawer