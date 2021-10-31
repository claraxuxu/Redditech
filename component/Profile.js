import React, { useState } from 'react';
import { StyleSheet, View, Text, Image } from 'react-native';
import Settings from './setting';

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

const Profile = () => {
    const img = global.resBody.icon_img
    const [img1, rien] = img.split('?')
    let img2 = {uri: img1};

    return (
        <View style={styles.container}>
            <View style={styles.pad}>
                <View style={styles.middle}>
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
                <Settings />
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
});

export default Profile;