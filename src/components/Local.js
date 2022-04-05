import React, { useState } from 'react';
import { View, Text,  Image, TextInput, SafeAreaView, ScrollView, TouchableOpacity} from 'react-native';
import styles from '../styles/local';
import CheckBox from "expo-checkbox";


const Local = ({navigation}) => {

    const [agree, setAgree] = useState(false);
    const [cep, setCep] = useState('')
    const [rua, setRua] = useState('')
    const [numero, setNumero] = useState('')
    const [bairro, setBairro] = useState('')
    const [cidade, setCidade] = useState('')
    const [estado, setEstado] = useState('')
    const [complemento, setComplemento] = useState('')
    const [erro, setErro] = useState(false)

    const handleCepChange = (cep) => { setCep(cep) }
    const handleRuaChange = (rua) => { setRua(rua) }
    const handleNumeroChange = (numero) => { setNumero(numero) }
    const handleBairroChange = (bairro) => { setBairro(bairro) }
    const handleCidadeChange = (cidade) => { setCidade(cidade) }
    const handleEstadoChange = (estado) => { setEstado(estado) }
    const handleComplementoChange = (complemento) => { setComplemento(complemento) }

    const PostDenuncia =  async () => {
            if (cep != "" && rua != "" && numero != "" && bairro != ""  && cidade != "" && estado != "" && complemento != "") {
                try {
                    
                    const requestOptions = {
                        method: 'POST',
                        headers: { 'Content-type': 'application/json' },
                        body: JSON.stringify({
                            cep: cep,
                            rua: rua,
                            numero: numero,
                            bairro: bairro,
                            cidade: cidade,
                            estado: estado,
                            complemento: complemento
                        })
                    }
                    
                    await fetch('http://10.0.0.142:3000/local_d/', requestOptions)
                } catch (error) {
                    console.log(error.message)
                } finally {
                    navigation.navigate('Denuncia')
                }
            } else {
                setErro(true)
            }
        
    }

    return(
        <SafeAreaView>
            <ScrollView>
               

                <View style={styles.container}>

                    
                    <Text style={styles.title}>
                        Informe nos campos abaixo o endereço do local da denúncia.
                    </Text>

                     <View style={styles.inputContainer}>
                    <TextInput style={styles.input} placeholder='CEP *'  onChangeText={handleCepChange} maxLength={8} keyboardType='numeric'></TextInput>
                    <Text style={styles.texterro}>{erro == true ? 'Preencha os campos corretamente' : ''}</Text>
                    <TextInput style={styles.input} placeholder='Rua *' onChangeText={handleRuaChange}></TextInput>
                    <Text style={styles.texterro}>{erro == true ? 'Preencha os campos corretamente' : ''}</Text>
                    <TextInput style={styles.input} placeholder='Número *' onChangeText={handleNumeroChange} keyboardType='numeric'></TextInput>
                    <Text style={styles.texterro}>{erro == true ? 'Preencha os campos corretamente' : ''}</Text>
                    <TextInput style={styles.input} placeholder='Bairro *' onChangeText={handleBairroChange}></TextInput>
                    <Text style={styles.texterro}>{erro == true ? 'Preencha os campos corretamente' : ''}</Text>
                    <TextInput style={styles.input} placeholder='Cidade *' onChangeText={handleCidadeChange}></TextInput>
                    <Text style={styles.texterro}>{erro == true ? 'Preencha os campos corretamente' : ''}</Text>
                    <TextInput style={styles.input} placeholder='Estado *' onChangeText={handleEstadoChange}></TextInput>
                    <Text style={styles.texterro}>{erro == true ? 'Preencha os campos corretamente' : ''}</Text>
                    <TextInput style={styles.input} placeholder='Complemento *' onChangeText={handleComplementoChange}></TextInput>
                    <Text style={styles.texterro}>{erro == true ? 'Preencha os campos corretamente' : ''}</Text>

                    </View>
                    <View style={styles.containerButton}>
                        <TouchableOpacity style={styles.carcButton} onPress={PostDenuncia} >
                            <Text style={styles.textButton}>Prosseguir</Text>
                        </TouchableOpacity>
                    </View>
                
                  
                
                </View>
            </ScrollView>
        </SafeAreaView>
    )
}

export default Local