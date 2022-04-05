import React from 'react'

import {SafeAreaView, ScrollView, View, Text, TouchableOpacity, Image } from 'react-native';
import styles from '../styles/semdenuncia';

const SemDenuncia = ({ navigation }) => {
    return (
        <SafeAreaView>
            <ScrollView>
                <View style={styles.container}>
                    <View style={styles.content}>
                        <Image style={styles.empty}
                            source={require('../assets/empty.png')}
                            resizeMode='contain'
                        />
                        <Text style={styles.p1}>Nada novo por aqui...</Text>
                        <Text style={styles.p2}>Comece a denunciar clicando no botão abaixo!</Text>
                    </View>

                </View>
            </ScrollView>
        </SafeAreaView>
    )
}

export default SemDenuncia
