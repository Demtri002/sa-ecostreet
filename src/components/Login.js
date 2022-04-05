import React, { useState } from 'react'
import {View, Text, TextInput, Button, TouchableOpacity, Image, ScrollView, SafeAreaView} from 'react-native'
import styles from '../styles/login'
import { useUser} from '../content/context'

const Login = ({navigation}) => {

    const[email, setEmail] = useState()
    const[senha, setSenha] = useState()
    const [error, setError] = useState(false)
    const { userLogado, setUserLogado } = useUser()

    const authUser = async (req, res) => {
            const dadosUsuario = await fetch("http://10.0.0.142:3000/users")
            const dadosJson =  await dadosUsuario.json()

            dadosJson.map(e =>{
                // if(e.email == email && e.senha == senha){

                    setUserLogado(e)
                    navigation.navigate('SuasDenuncias')
                // }else{
                    setError(true)
                // }
            
            })
        }

    return(
        <SafeAreaView>
            <ScrollView>
                <View style={styles.container}>
                        
                         <Image
                            source={require('../assets/login-wallpaper.png')}
                            style={styles.wallpaper}
                         />

                         <Image
                            source={require('../assets/login-logo.png')}
                            style={styles.logo}
                         />

                         <View style={styles.content}>
                                
                                <Text style={styles.title}>Login</Text>

                                <TextInput style={styles.input} placeholder={"E-mail:"} onChange={e => setEmail(e.target.value)}></TextInput>
                                <Text style={styles.texterro}>{error == true ? 'Email ou senha inválidos' : ''}</Text>
                                <TextInput style={styles.input} placeholder={"Senha:"} onChange={e => setSenha(e.target.value)} secureTextEntry={true}></TextInput>
                                <Text style={styles.texterro}>{error == true ? 'Email ou senha inválidos' : ''}</Text>

                                <TouchableOpacity style={styles.button} onPress={authUser}>
                                        <Text style={styles.textButton}>LOGAR</Text>
                                </TouchableOpacity>

                                <View style={styles.display}>
                                    <Text style={styles.p1}>Não tem uma conta?</Text>
                                    <Text style={styles.p2} onPress={() => navigation.navigate("Cadastro")}> Cadastre-se!</Text>
                                </View>
                         </View>

                    
                       
                </View>
            </ScrollView>
        </SafeAreaView>

    )
}

export default Login
