import {StyleSheet} from 'react-native'

export default StyleSheet.create({
    container: {
        flex:1,
    },
    centro:{
        alignItems:'center',
        justifyContent:'center',
        flex:1,
    },
    p1: {
        fontSize:25,
        textAlign:'center',
        marginBottom:25
    },
    p2:{
        fontSize:18,
        textAlign:'center',
        marginHorizontal:5
    },
    img:{
        alignItems:'center',
        justifyContent:'center',
        marginVertical: 23
    },

    balao:{
        marginTop:30,
        marginBottom: 50,
        width: 130,
        height: 130,
        opacity:0.8
    }, 

    flex:{
        flex: 1,
        backgroundColor:'#0f644d',
        width: '100%',
        paddingVertical: 25,
        
    },

    openDrawer: {
        width: 30,
        height: 30,
        position: 'absolute',
        marginHorizontal: 8,
        marginTop: -25
        
        },
  
    
    textHeader: {
        color:'#fff',
        fontSize: 17,
        textAlign: 'center'
    },

    addButton:{
        width: 60,
        height: 60,
    },
    container2:{
        flex: 1,
        alignItems: 'center'
    },

    denunciaContainer:{
        marginTop: 100,
        
        width: '100%',
        alignItems: 'center'
    },

    miniContainer:{
        width: '90%',
        height: 80,
        backgroundColor: '#e5e5e5',
        borderRadius: 20,
        padding: 10,
        marginTop: 20
    },

    title:{
        fontSize: 20,
        marginTop: 5
    },

    subtitle:{
        marginTop: 10
    },

    addButton:{
        marginTop: 350,
        width: 60,
        height: 60,
    }
})