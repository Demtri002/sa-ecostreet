import React, { useEffect, useState } from 'react';
import { SafeAreaView, ScrollView, View, Text, TouchableOpacity, Image, Button } from 'react-native';
import styles from '../styles/comdenuncia';
import { FlatList } from 'react-native-gesture-handler';
import { useUser } from '../content/context'
import ModalT from '../components/Modal'

const ComDenuncia = ({navigation}) => {
    const { userLogado, setUserLogado, denuncia } = useUser()
    const [data, setData] = useState([])

    const getDenuncia = async () => {
        try {
            const denuncias = await fetch("http://localhost:3000/denuncia")
            const json = await denuncias.json()
            setData(json)

        } catch (error) {
            console.error(error)
        } finally {
            // console.log('to aq');

        }

    }

    useEffect(() => {
        getDenuncia()
    }, [])
console.log(data);

    return (
        <SafeAreaView>
            <ScrollView>
                    <FlatList
                        data={denuncia}
                        keyExtractor={({ id }, index) => id}
                        renderItem={({ item }) => (
                            <View style={styles.container}>
                                <View style={styles.denunciaContainer}>
                                    <View style={styles.miniContainer}>
                                        <Text style={styles.title}>{item.titulo}</Text>
                                        <Text style={styles.subtitle}>{item.descricao}</Text>
                                        <View
                                        >
                                    </View>
                                    </View>
                                </View>
                                
                            </View>
                        )}
                    />
            </ScrollView>
        </SafeAreaView>
    )
}

export default ComDenuncia