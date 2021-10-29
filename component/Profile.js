import React, { useState } from 'react';
import { StyleSheet, View, Text, Image, TouchableOpacity, Modal, TextInput, Switch } from 'react-native';
import axios from 'react-native-axios';

const Profile = ({ navigation }) => {
    const img = global.resBody.icon_img
    const [img1, rien] = img.split('?')
    let img2 = {uri: img1};
    const [modalOpen, setModalOpen] = useState(false);
    const [isEnabled, setIsEnabled] = useState(false);
    const toggleSwitch = () => setIsEnabled(previousState => !previousState);

    return (
        <View style={styles.container}>
            <Modal visible={modalOpen} animationType='slide'>
                <View style={styles.modalContent}>
                    <View style={styles.button}>
                        <TouchableOpacity
                        style={styles.modalBut}
                        onPress={() => setModalOpen(false)}>
                            <Text style={styles.saveText}>Back</Text>
                        </TouchableOpacity>
                        <TouchableOpacity
                        style={styles.modalBut}
                        onPress={() => setModalOpen(false)}>
                            <Text style={styles.saveText}>Save</Text>
                        </TouchableOpacity>
                    </View>

                    <View style={styles.changeBar}>
                        <Text  style={styles.info}>Name :</Text>
                        <TextInput 
                            placeholder={global.resBody.name}
                            placeholderTextColor="#E5E5E5"
                            style={styles.changeInput}
                        />
                    </View>
                    <View style={styles.changeBar}>
                        <Text style={styles.info}>Description : </Text>
                        <TextInput 
                            placeholder={global.resBody.subreddit.public_description}
                            placeholderTextColor="#E5E5E5"
                            style={styles.changeInput}
                        />
                    </View>
                    <View style={styles.changeBar}>
                        <Text style={styles.info}>Over18? : </Text>
                        <Switch
                            trackColor={{ false: "#767577", true: "#81b0ff" }}
                            thumbColor={isEnabled ? "#f5dd4b" : "#f4f3f4"}
                            ios_backgroundColor="#3e3e3e"
                            onValueChange={toggleSwitch}
                            value={isEnabled}
                        >
                        </Switch>
                    </View>
                </View>
            </Modal>
            <View style={styles.pad} 
                blurRadius={1}>
                <TouchableOpacity
                    onPress={() => setModalOpen(true)}
                    style={styles.editButton}>
                {/* faire un popup de edit */}
                    <Image style={styles.edit}
                    source={require('../assets/edit.png')} />
                </TouchableOpacity>
                <Text style={styles.info}>Name : {global.resBody.name}</Text>
                <Text style={styles.info}>Description : {global.resBody.subreddit.public_description}</Text>
                <Text style={styles.info}>Friends : {global.resBody.num_friends}</Text>
                <Text style={styles.info}>Karma : {global.resBody.link_karma}</Text>
                {global.resBody.over_18 === false ? 
                    <Text style={styles.info}>Over_18 : No</Text>
                : <Text style={styles.info}>Over_18: Yes</Text>}
            </View>
            <Image style={styles.pp} source={img2} />
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        margin: 5,
        alignItems: 'center'
    },
    button: {
        justifyContent: 'space-between',
        flexDirection: 'row',
        margin: 10
    },
    changeBar: {
        margin: 10,
        flexDirection: 'row',
        width: 300,
    },
    changeItem: {
        marginTop: 13
    },
    changeInput: {
        margin: 5,
        height: 40,
        borderBottomWidth: 1,
        borderBottomColor: "#404040"
    },
    saveText: {
        color: "#000",
        fontWeight: 'bold',
        fontSize: 15
    },
    pad: {
        marginTop: 70,
        width: 320,
        height: 300,
        backgroundColor: '#96CEEB',
        borderRadius: 25,
        alignItems: 'flex-start',
        paddingTop: 10,
        paddingLeft: 20
    },
    editButton: {
        marginLeft: "90%"
    },
    edit: {
        width: 20,
        height: 20,
    },
    pp: {
        position: 'absolute',
        width: 90,
        height: 90,
        borderRadius: 50,
        borderColor: "#000"
    },
    info: {
        position: 'relative',
        color: '#404040',
        fontSize: 16,
        marginTop: 10
    }
});

export default Profile;