import React, { useState } from 'react';
import { StyleSheet, View, Text, Image, TouchableOpacity, Modal, TextInput, Switch } from 'react-native';
import axios from 'react-native-axios';
import LinearGradient from 'react-native-linear-gradient';

const Infos = () => {
    return (
        <View style={styles.lines}>
            <View style={styles.otherkarma}>
                <Image style={styles.othericons} source={require('../assets/coin.png')} />
                <Text style={styles.otherinfo}>Reddit coins      </Text>
                <Text style={styles.otherinfo}>{global.resBody.num_friends}</Text>
            </View>
            <View style={styles.otherkarma}>
                <Image style={styles.othericons} source={require('../assets/18-.png')} />
                <Text style={styles.otherinfo}>Over_18            </Text>
                {global.resBody.over_18 === false ? 
                <Text style={styles.otherinfo}>No</Text>
                : <Text style={styles.otherinfo}>Yes</Text>}
            </View>
            <View style={styles.otherkarma}>
                <Image style={styles.othericons} source={require('../assets/comment.png')} />
                <Text style={styles.otherinfo}>Comment karma</Text>
                <Text style={styles.otherinfo}>{global.resBody.comment_karma}</Text>
            </View>
            <View style={styles.otherkarma}>
                <Image style={styles.othericons} source={require('../assets/email.png')} />
                <Text style={styles.otherinfo}>Mail Verified    </Text>
                {global.resBody.has_verified_email === false ? 
                <Text style={styles.otherinfo}>No</Text>
                : <Text style={styles.otherinfo}>Yes</Text>}
            </View>
        </View>
    );
}

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
            <View style={styles.pad}>
                <View style={styles.middle}>
                    <TouchableOpacity
                        onPress={() => setModalOpen(true)}
                        style={styles.editButton}>
                        <Image style={styles.edit}
                        source={require('../assets/edit.png')} />
                    </TouchableOpacity>
                    <Text style={styles.info}>{global.resBody.subreddit.display_name_prefixed}</Text>
                    <Text style={styles.des}>{global.resBody.subreddit.public_description}</Text>
                    <View style={styles.numbers}>
                        <View style={styles.karma}>
                            <Image style={styles.icons} source={require('../assets/karma.png')} />
                            <Text style={styles.info}>{global.resBody.link_karma} Karma</Text>
                        </View>

                        <View style={styles.karma}>
                            <Image style={styles.icons} source={require('../assets/cake.png')} />
                            <Text style={styles.info}>{global.resBody.num_friends} Friends</Text>
                        </View>
                    </View>
                    <Text style={styles.info}>{ global.resBody.subreddit.subscribers} Followers</Text>
                </View>
                <Infos />
                <TouchableOpacity style={styles.setbutton}>
                    <Text style={styles.settextButton}>Setting</Text>
                </TouchableOpacity>
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
        marginTop: 90,
        width: 320,
        height: "60%",
        backgroundColor: "#CBD6EA",
        borderRadius: 20,
    },
    middle: {
        alignItems: 'center',
        paddingTop: 10,
    },
    lines: {
        alignItems: 'flex-start',
        paddingTop: 20,
        marginLeft: 20
    },
    editButton: {
        marginLeft: "90%"
    },
    edit: {
        width: 20,
        height: 20,
    },
    numbers: {
        marginTop: 20,
        width: "85%",
        flexDirection: 'row',
        justifyContent: 'space-between',
        paddingBottom: 10,
        borderBottomColor: "#404040",
        borderBottomWidth: 1
    },
    karma: {
        flexDirection: 'row',
        justifyContent: 'space-between'
    },
    otherkarma: {
        width:  300,
        marginBottom: 10,
        flexDirection: 'row',
        justifyContent: 'flex-start'
    },
    icons: {
        width: 30,
        height: 30,
        marginRight: 10,
        marginTop: 5
    },
    othericons: {
        width: 20,
        height: 20,
        marginRight: 10,
        marginTop: 10,
    },
    pp: {
        position: 'absolute',
        width: 90,
        height: 90,
        borderRadius: 50,
        borderColor: "#000",
        marginTop: 20
    },
    info: {
        position: 'relative',
        color: '#000',
        fontSize: 16,
        marginTop: 12,
    },
    otherinfo: {
        position: 'relative',
        color: '#000',
        fontSize: 16,
        marginTop: 10,
        marginRight: 70
    },
    des: {
        color: '#1C3A70',
        fontSize: 16,
        marginTop: 5,
    },
    setbutton : {
        marginTop: '30%',
        width: 320,
        height: 50,
        borderRadius: 40,
        alignItems: 'center',
        justifyContent: 'center',
        backgroundColor: "#CBD6EA"
    },
    settextButton: {
        fontSize: 16,
        letterSpacing: 1.5,
        textAlign: 'center',
        color: '#1C3A70'
    },
});

export default Profile;