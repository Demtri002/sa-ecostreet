import React from 'react';
import { SafeAreaView, ScrollView, View, Text, Image, TouchableOpacity } from 'react-native'
import styles from '../styles/categoria'


const Categoria = ({navigation}) => {
    return(
        <SafeAreaView>
            <ScrollView>
        <View style={styles.container}>
            <Text style={styles.title}> Selecione a categoria da denúncia</Text>

            <TouchableOpacity onPress={() => navigation.navigate("Local")}>
            <View style={styles.background}>
            <Image
            source={require('../assets/fogo.png')}
            resizeMode='contain'
            style={styles.img}
            />
            </View>
            </TouchableOpacity >
            <Text style={styles.titleImg}>INCÊNDIO</Text>

            <TouchableOpacity onPress={() => navigation.navigate("Local")}>
                <View style={styles.background}>
            <Image
            source={require('../assets/agua.png')}
            resizeMode='contain'
            style={styles.img}
            />
            </View>
            </TouchableOpacity>
            
            <Text style={styles.titleImg}>ÁGUA</Text>

            <TouchableOpacity onPress={() => navigation.navigate("Local")}>
            <View style={styles.background}>
            <Image
            source={require('../assets/cone.png')}
            resizeMode='contain'
            style={styles.img}
            />
            </View>
            </TouchableOpacity>
            <Text style={styles.titleImg}>PAVIMENTAÇÃO</Text>


            <TouchableOpacity onPress={() => navigation.navigate("Local")}>
            <View style={styles.background}>
            <Image
            source={require('../assets/saneamento.png')}
            resizeMode='contain'
            style={styles.img}
            />
                </View>
                </TouchableOpacity>
                <Text style={styles.titleImg}>SANEAMENTO</Text>
            
        </View>

        
        </ScrollView>
        </SafeAreaView>

       

    )
}

export default Categoria