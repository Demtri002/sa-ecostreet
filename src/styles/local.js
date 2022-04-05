import { StyleSheet } from 'react-native';

export default StyleSheet.create({
    header:{
        padding:32,
        width: '100%',
        height: 135,
        backgroundColor: '#002f21',
        alignItems:'center'
    },
    imgHeader: {
        width: 200,
        height: 110
    },

    container:{
        flex: 1,
        backgroundColor: '#dfeeea'
    },

    title:{
        margin: 20,
        fontSize: 20,
        textAlign: 'center',
    },
    
    checkboxContainer:{
        flexDirection: 'row',
    },
    
    textCheckbox:{
        marginLeft: 2,
        marginRight: 30,
        marginTop: 45,
        fontSize: 18,
        color: '#000'
        
    },

    checkbox:{
        marginLeft: 35,
        marginRight: 5,
        marginTop: 45,
        width: 20,
        height: 20,
        
    },

    input:{
        width: '80%',
        padding: 10,
        borderColor: 'green',
        borderBottomWidth: 2,
        borderBottomColor: '#00D192',
        borderTopWidth: 0,
        borderRightWidth: 0,
        borderLeftWidth: 0,
        marginTop: 15,
        fontSize: 18
        
    },
    texterro:{
        color:'red',
        marginRight: 40
    },
    inputContainer:{
        textAlign: 'center',
        alignItems: 'center'
    },

    containerButton:{
        margin: 50,
        alignItems: 'center',
    },

    carcButton:{
        backgroundColor: '#0F644D',
        padding: 12,
        borderRadius: 20,
        width: 150,
        height: 50
    },

    textButton:{
        color: '#E8F1F2',
        textAlign: 'center',
        fontSize: 18
    }

    

    

    


    

})

