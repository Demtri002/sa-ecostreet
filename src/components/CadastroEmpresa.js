// import React, { useState } from 'react';
// import { View, Text, TouchableOpacity, Image, TextInput, ScrollView, SafeAreaView } from 'react-native';
// import styles from '../styles/cadastro'

// const Cadastro = ({ navigation }) => {

//     const [erro, setErro] = useState(false)
//     const [nome, setNome] = useState('')
//     const [email, setEmail] = useState('')
//     const [cnpj, setCnpj] = useState('')
//     const [senha, setSenha] = useState('')
//     const [confirm, setConfirm] = useState('')

//     const handleNomeChange = (nome) => { setNome(nome) }
//     const handleEmailChange = (email) => { setEmail(email) }
//     const handleCnpjChange = (cnpj) => { setCnpj(cnpj) }
//     const handleSenhaChange = (senha) => { setSenha(senha) }
//     const handleConfirmChange = (confirm) => { setConfirm(confirm) }

//     const postEmpresa = async () => {
//         if (confirm != senha) {
//             console.log('DEPOIS NÓS VE ESSA PORRA AQUI');
//         } else {
//             if (nome != "" && email != ""  && cnpj != "" && senha != "") {
//                 try {
//                     const requestOptions = {
//                         method: 'POST',
//                         headers: { 'Content-type': 'application/json' },
//                         body: JSON.stringify({
//                             nome: nome,
//                             email: email,
//                             cnpj: cnpj,
//                             senha: senha
//                         })
//                     }
//                     await fetch('http://10.0.0.142:3000/empresa/', requestOptions)
//                 } catch (error) {
//                     console.log(error.message)
//                 } finally {
//                     navigation.navigate('LoginEmpresa')
//                 }
//             } else {
//                 setErro(true)
//             }
//         }

//     }

//     return (
//         <SafeAreaView>
//         <ScrollView style={styles.scrollView}>
//             <View style={styles.container}>
                        
//                         <Image
//                             source={require('../assets/cadastro-wallpaper.png')}
//                             style={styles.wallpaper}
//                          />

//                          <Image
//                             source={require('../assets/cadastro-logo.png')}
//                             style={styles.logo}
//                          />

//                           <View style={styles.content}>

//                           <Text style={styles.title}>Cadastro da Empresa</Text>

//                         <TextInput style={styles.input} placeholder='Nome:' onChangeText={handleNomeChange}></TextInput>
//                         <Text style={styles.texterro}>{erro == true ? 'Preencha os campos corretamente' : ''}</Text>
                
//                         <TextInput style={styles.input} placeholder='E-mail:' keyboardType='email-address' onChangeText={handleEmailChange}></TextInput>
//                         <Text style={styles.texterro}>{erro == true ? 'Preencha os campos corretamente' : ''}</Text>
                
//                         <TextInput style={styles.input} placeholder='CNPJ:' keyboardType="numeric" maxLength={11} onChangeText={handleCnpjChange}></TextInput>
//                         <Text style={styles.texterro}>{erro == true ? 'Preencha os campos corretamente' : ''}</Text>
                
//                         <TextInput style={styles.input} placeholder='Senha:' onChangeText={handleSenhaChange} secureTextEntry={true} ></TextInput>
//                         <Text style={styles.texterro}>{erro == true ? 'Preencha os campos corretamente' : ''}</Text>
                
//                         <TextInput style={styles.input} placeholder='Confirme sua senha:' onChangeText={handleConfirmChange} secureTextEntry={true} ></TextInput>
//                         <Text style={styles.texterro}>{erro == true ? 'Preencha os campos corretamente' : ''}</Text>


//                         <TouchableOpacity style={styles.button} onPress={postEmpresa}>
//                                         <Text style={styles.textButton}>CADASTRAR</Text>
//                                 </TouchableOpacity>
                    
//                     <View style={styles.display}>
//                     <Text style={styles.p1}>Já tem uma conta?</Text>
//                     <Text style={styles.p2} onPress={() => navigation.navigate("LoginEmpresa")}> Faça login!</Text>
//                     </View>
//                             </View>
                                

               
                
                           
//             </View>
//         </ScrollView>
//         </SafeAreaView>
//     )
// }

// export default Cadastro