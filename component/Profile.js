import React from 'react';
import { StyleSheet, View, Text, Image } from 'react-native';

const Profile = ({ navigation }) => {
    const img = global.resBody.icon_img
    const [img1, rien] = img.split('?')
    let img2 = {uri: img1};
    console.log(img2);

    return (
        <View style={styles.container}>
            <View style={styles.pad} 
                blurRadius={1}>
                <Text style={styles.info}>Name : {global.resBody.name}</Text>
                <Text style={styles.info}>Description : {global.resBody.subreddit.public_description}</Text>
                <Text style={styles.info}>Friends : {global.resBody.num_friends}</Text>
                <Text style={styles.info}>Karma : {global.resBody.link_karma}</Text>
                <Text style={styles.info}>Coins : {global.resBody.coins}</Text>
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
    pad: {
        marginTop: 70,
        width: 320,
        height: 300,
        backgroundColor: '#96CEEB',
        borderRadius: 25,
        alignItems: 'flex-start',
        paddingTop: 30,
        paddingLeft: 20
    },
    // pp: {
    //     position: 'absolute',
    //     width: 100,
    //     height: 100
    // },
    pp: {
        position: 'absolute',
        width: 100,
        height: 100,
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

