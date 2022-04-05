import React, {useState} from 'react';
import { Button, View, TouchableOpacity } from 'react-native';
import styles from '../styles/paulonew'
import { TextInput } from 'react-native-gesture-handler';

const PauloNew = ({  navigation }) => {
    const [nome, setNome] = useState('')
    const [sobrenome, setSobrenome] = useState('')
    const [email, setEmail] = useState('')
    const [cpf, setCpf] = useState('')

    const handleNomeChange = (nome) => {setNome(nome)}
    const handleEmailChange = (email) => {setEmail(email)}
    const handleSobrenomeChange = (sobrenome) => {setSobrenome(sobrenome)}
    const handleCpfChange = (cpf) => {setCpf(cpf)}

    const postUser = async () => {
        console.log("nome: " + nome + " - email: " + email + " - Sobrenome: " + sobrenome + " - CPF: " + cpf)
        if(nome != "" || email != "" || sobrenome != "", cpf != ""){
            try {
                const requestOptions = {
                    method: 'POST',
                    headers: { 'Content-type': 'application/json'},
                    body: JSON.stringify({
                        nome: nome,
                        sobrenome: sobrenome,
                        email: email,
                        cpf:cpf
                    })
                }
                await fetch('http://localhost:3000/users/', requestOptions)
            } catch (error){
                console.error(error)
            } finally {
                navigation.navigate('FrontPaulo')
            }
        } else {

        }
    }

    return(
        <View style={styles.container}>
    
            
                <TextInput
                 onChangeText={handleNomeChange}
                 placeholder="Escreva o nome"
                 style={styles.text}
                />

            <TextInput
                 onChangeText={handleEmailChange}
                 placeholder="Escreva o email"
                 style={styles.text}
                />

                <TextInput
                 onChangeText={handleSobrenomeChange}
                 placeholder="Escreva o email"
                 style={styles.text}
                />
                
            <Button
                onPress={postUser}
                title="Salvar"
                style={styles.button}
            />

        </View>
    )
}

export default PauloNew