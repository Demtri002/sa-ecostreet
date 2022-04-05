import { StyleSheet } from 'react-native';

export default StyleSheet.create({
    
    container:{
        flex: 1,
        alignItems: 'center'
        
    },

    title:{
        marginTop: 30,
        fontSize: 20,
        textAlign: 'center'
    },


    input:{
        width: '80%',
        padding: 10,
        borderBottomWidth: 2,
        borderBottomColor: '#00D192',
        marginTop: 50,
        fontSize: 18
        
    },
    
    desc:{
        width: '80%',
        height: 200,
        padding: 10,
        borderWidth: 2,
        borderColor: '#00D192',
        marginTop: 100,
        fontSize: 18,
        textAlignVertical: 'top'
        
    },

    pickImg:{
        marginTop: 50,
        backgroundColor: '#e5e5e5',
        width: '50%',
    },

    pickImgText:{
        fontSize: 15,
        textAlign: 'center',
        padding: 10
    },
    
      button:{
        marginTop: 50,
        marginRight: 20, 
        alignSelf: 'flex-end',
        backgroundColor: '#0F644D',
        padding: 12,
        borderRadius: 10
    },

    textButton:{
        textAlign: 'center',
        color: '#fff',
        fontSize: 15
    },
    texterro:{
        color:'red',
        marginRight:40
    }

   

})