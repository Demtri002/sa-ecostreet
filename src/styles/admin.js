import { StyleSheet } from 'react-native';

export default StyleSheet.create({
    container:{
        flex: 1,
        alignItems: 'center'
    },

    title:{
        marginTop: 20,
        fontSize: 30,
        marginBottom: 20
    },

    denunciaContainer:{
        marginTop: 10,
        width: '100%',
        alignItems: 'center',
        marginBottom: 20
    },

    miniContainer:{
        flex:1,
        width: '90%',
        // height: 80,
        backgroundColor: '#e5e5e5',
        borderRadius: 10,
        padding: 10,
        marginTop: 20
    },

    textContainer:{
        flexDirection: 'row',
        paddingVertical: 5,
        textAlign: 'justify'
    },

    textContainerDesc:{ //sem o flexDirection: 'row'
        paddingVertical: 5,
        textAlign: 'justify'
    },
    
    titleContent:{
        fontWeight: 'bold'
    }, 
    
    text:{
        
    },

    deleteButton:{
        alignItems: 'flex-end'
    }

})