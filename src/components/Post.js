import React, { useState } from "react";
import { Alert, Modal, StyleSheet, Text, Pressable, View, Button, Touchable } from "react-native";
import ModalT from '../components/Modal'
import { TouchableOpacity } from "react-native-gesture-handler";

const Post = ({navigation}) => {
    const [modalVisible, setModalVisible] = useState(false);

    const toggeleModal = () => {
        setModalVisible(!modalVisible)
    }

    return (
        <View >

            <ModalT
                isVisible={modalVisible}
                onBackdropPress={toggeleModal}
                onSwipeComplete={toggeleModal}
            />

            <Button
                title='Abrir'
                onPress={() => toggeleModal()}
            />
        </View>
    )
};

export default Post