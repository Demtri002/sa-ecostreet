import React from 'react';
import {View, Text, ScrollView, Image, SafeAreaView, TouchableOpacity} from 'react-native';
import styles from '../styles/aboutus';

const AboutUs = ({navigation}) => {

    return(

    <SafeAreaView>
    <ScrollView>
        <View style={styles.container}>

        <View style={styles.flex}>

        <Text style={styles.textHeader}>Sobre a Ecostreet</Text>

                <TouchableOpacity onPress={() => navigation.openDrawer()}>
               
               <Image
                   source={require('../assets/Group.png')} style={styles.openDrawer}
                   resizeMode='contain'
               />
           
       </TouchableOpacity>

</View>
            <Image
                resizeMode='contain'
                style={styles.logoSn}
                source={require('../assets/logo_sn.png')}
            />
        
            <Text style={styles.title}>O que é a Ecostreet?</Text>
            
              <View style={styles.contentContainer}> 


                <Text style={styles.content}>
                Um aplicativo que tem como objetivo principal ajudar a população 
                de Florianópolis a expor e denunciar situações de obras inacabadas, buracos, 
                vazamentos de esgoto dentre outros problemas presentes nas estradas da cidade.</Text>

                <Text style={styles.content}> Nossa ideia é utilizar da praticidade das tecnologias presentes 
                nos telefones celulares para conectar cada vez mais pessoas para que estas 
                possam reportar os problemas sem solução que encontrarem.</Text>

                <Text style={styles.content}>Dessa forma, nós visamos criar um aplicativo que 
                traga uma forma interativa de reunir grandes quantidades de denúncia, 
                chamando a atenção dos órgãos competentes para que no final elas possam ser resolvidas.</Text>
                </View> 
            
             <View style={styles.icons}>

		<TouchableOpacity>
                <Image
                style={styles.iconsImg}
                source={require('../assets/instagram.png')}
                />

		</TouchableOpacity>

		<TouchableOpacity>

                <Image
                style={styles.iconsImg}
                source={require('../assets/gmail.png')}
                />

		</TouchableOpacity>

		<TouchableOpacity>
                <Image
                style={styles.iconsImg}
                source={require('../assets/linkedin.png')}
                />
		</TouchableOpacity>
            </View>
            
            <Text style={styles.finalText}>
            ECOSTREET© TODOS OS DIREITOS RESERVADOS
            </Text> 

            
        </View>
    </ScrollView>
    </SafeAreaView>
    )
}


export default AboutUs