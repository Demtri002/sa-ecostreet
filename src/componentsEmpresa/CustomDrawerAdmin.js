import React, {useEffect, useState}from "react";
import { View, Text, Image, ActivityIndicator, FlatList, TextInput} from 'react-native'
import {DrawerContentScrollView, DrawerItemList} from '@react-navigation/drawer'
import { TouchableOpacity } from "react-native-gesture-handler";
import { useEmpresa } from '../content/contextEmpresa'

import Icon from 'react-native-vector-icons/Ionicons'

const CustomDrawer = (props, {navigation}) => {
    const [data, setData] = useState([])
    const [isLoading, setLoading] = useState(true)
    const { empresaLogado, setEmpresaLogado } = useEmpresa()

    const getLoginEmpresa = async () => {
        try{
            const response = await fetch('http://10.0.0.142:3000/empresa/')
            const json = await response.json()
            setData(json)
        }catch (error) {
            console.error(error)
        }finally{
            setLoading(false)
        }
}

    useEffect(() => {
        getLoginEmpresa()
    }, [])


    return(
        <SafeAreaView>
            <ScrollView>
            <View style={styles.container}>
                    <View style={styles.flex}>
                        <TouchableOpacity onPress={() => navigation.openDrawer()}>
                            <View style={{ width: 100, marginHorizontal: 10, marginTop: 13, marginBottom: 10 }}>
                                <Image
                                    source={require('../assets/fotoperfil.jpg')} style={styles.imgperfil}
                                />
                            </View>
                        </TouchableOpacity>
                        </View>
        <View style={{flex:1}}>
            <DrawerContentScrollView {...props} contentContainerStyle={{backgroundColor:'#002F21'}}> 
            {/* PARTE DE CIMA DO DRAWER */}
                <View style={{backgroundColor:'#002F21', padding:10, flexDirection:'row'}}>
                    <Image source={require('../assets/fotoperfil.jpg')} style={{height:80, width:80,borderRadius: 50,  marginBottom:10}}/>
                    <Text style={{color:'white', marginVertical:35, marginLeft:10}}>
                        <View>
                            <Text style={{fontSize:18}}> {empresaLogado.nome} {empresaLogado.sobrenome}</Text>
                        </View>
                </Text>
                </View>
                <View style={{flex:1, backgroundColor:'#fff'}}>
                <DrawerItemList {...props}/>
                </View>
            </DrawerContentScrollView>
            {/* PARTE DE BAIXO DO DRAWER */}
    
            <View style={{padding:10, borderTopWidth:1, borderTopColor: '#ccc', backgroundColor:'#B1B7B5'}}>
            <TouchableOpacity onPress={() => {}} style={{paddingVertical:15}}>
                <View style={{flexDirection:'row', alignItems:'center'}}>
                <Icon name='exit-outline' size={30}/>
                <Text style={{fontSize:16, marginLeft:6}}>Sair</Text>
                </View>
            </TouchableOpacity>
            </View>
        </View>
        </View>

        </ScrollView>    
        </SafeAreaView>
    )
}

export default CustomDrawer