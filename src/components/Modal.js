import React, { useState } from "react";
import { Alert, StyleSheet, Text, Pressable, View, Button, FlatList } from "react-native";
import Modal from 'react-native-modal'
import { TouchableOpacity } from "react-native-gesture-handler";

const deleteDenuncia = async (id) => {
    const [data, setData] = useState([])

    const requestOprions = {
        method: 'DELETE',
        headers: { 'Content-type': 'application/json' }
    }

    try {
        await fetch('http://localhost:3000/denuncia/' + id, requestOprions)
        setData(data.filter(denuncia => denuncia.id != id))
    } catch (error) {
        console.log('error');
        
    }
}

const ModalT = (props) => {
    return (
        
        <View style={styles.centeredView}>
        <Modal
          animationType="slide"
          transparent={true}
          isVisible={props.isVisible}
        >
          <View style={styles.centeredView}>
            <View style={styles.modalView}>
              <Text style={styles.modalText}>Hello World!</Text>
            </View>
          </View>
        </Modal>
      </View>
    )
}

const styles = StyleSheet.create({
    centeredView: {
        flex: 1,
        justifyContent: "center",
        alignItems: "center",
        marginTop: 22
      },
      modalView: {
        margin: 20,
        backgroundColor: '#e5e5e5',
        borderRadius: 20,
        padding: 10,
        padding: 35,
        alignItems: "center",
      },
      buttonClose: {
        backgroundColor: "#2196F3",
      },
      modalText: {
        marginBottom: 15,
        textAlign: "center"
      }
})


export default ModalT