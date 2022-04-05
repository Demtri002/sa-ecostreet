import React from 'react';
import { View, Text, ScrollView, Image, SafeAreaView, TouchableOpacity, ImageBackground, Dimensions } from 'react-native';
import styles from '../styles/paginainicial';

const PaginaInicial = ({ navigation }) => {

    const win = Dimensions.get('window');

    const ratio = win.width / 500

    return (

        <SafeAreaView>
            <ScrollView>

                <View style={styles.container}>

                    <View style={styles.logoCont}>
                        <Image
                            source={require('../assets/pginicial-logo.png')}
                            style={styles.logo}
                            resizeMode='contain'
                        />

                        <Text style={styles.subtitle}>DENÚNCIAS URBANAS</Text>


                    </View>



                    <ImageBackground
                        source={require('../assets/bgwallpaper.jpeg')}
                        style={{
                            width: win.width,
                            height: 750 * ratio,
                            opacity: 0.8
                        }}>
                    </ImageBackground>



                    <TouchableOpacity style={styles.button} onPress={() => navigation.navigate('PaginaSec')}>
                        <Text style={styles.textButton}>COMEÇAR</Text>
                    </TouchableOpacity>

                </View>
            </ScrollView>
        </SafeAreaView>
    )
}


export default PaginaInicial