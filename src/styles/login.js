import {StyleSheet} from 'react-native'

export default StyleSheet.create({
    container: {
        alignItems: 'center',
        flex:1,
    },

    wallpaper:{
        opacity: 0.75
    },

    logo:{
        position: 'absolute',
        marginTop: 70,
        width: 200,
        height: 200
    },

    content:{
        alignItems: 'center',
        backgroundColor: '#fff',
        marginTop: -100,
        width: '100%',
        borderTopLeftRadius: 50,
        borderTopRightRadius: 50
    },

    title:{
        color: '#0D0F12',
        textAlign: 'center',
        margin: 25,
        fontSize: 25
    },

    input:{
        width: '80%',
        padding: 10,
        marginLeft:50,
        marginRight:50,
        marginTop:50,
        borderBottomWidth: 2,
        borderBottomColor: '#A4EFC1',
    },

    texterro: {
        color: 'red',
        marginBottom:50
    },

    button:{
        width: '80%',
        marginBottom: 30,
        backgroundColor: '#0F644D',
        borderRadius: 25
    },

    textButton:{
        color: '#fff',
        fontSize: 20,
        textAlign: 'center',
        padding: 20
    },

    display:{
        flexDirection: 'row',
        marginBottom: 50
    },

    p1:{
        fontSize: 15
    },

    p2:{
        fontSize: 15,
        color: '#0000ff',
        textDecorationLine: 'underline'
    },


})