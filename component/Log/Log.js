import React from 'react';
import { StatusBar } from 'expo-status-bar';
import {
    View,
    Image,
    Text,
    StyleSheet,
    TouchableOpacity,
    TouchableNativeFeedback
} from 'react-native';
import { LinearGradient } from 'expo-linear-gradient';
 
export default function Log({ navigation }) {

    const pressWebView = () => {
        navigation.navigate('LogWeb');
    }

    return (
        <View style={styles.screen}>
            <View style={styles.main}>
                <Image style={styles.logo}
                source={require('../../assets/reddit_logo2.png')} />
                <Text style={styles.titleText}>
                    Redditech
                </Text>

                {/* <TouchableOpacity 
                    style={styles.buttonContainer}
                    background={TouchableNativeFeedback.Ripple('black',false)}
                    onPress={pressWebView}
                >
                    <View style={styles.contenu}>
                        <Image style={styles.icon}
                        source={require('../../assets/icon_email.png')} />  
                        <Text style={styles.buttonText}> Sign Up with Email </Text>
                    </View>
                </TouchableOpacity> */}

                {/* <TouchableOpacity 
                    style={styles.buttonContainer}
                    background={TouchableNativeFeedback.Ripple('black',false)}
                    onPress={pressWebView}
                >
                    <Text style={styles.buttonText}> Sign In With Your Account Reddit </Text>
                </TouchableOpacity> */}

                <TouchableOpacity
                onPress={pressWebView}>
                    <LinearGradient 
                        start={{x: 0, y: 0.75}} end={{x: 1, y: 0.25}}
                        colors={['#DE190B', '#DE7502']} 
                        style={styles.button}>
                        <Text style={styles.Sign}> Sign In / Sign Up </Text>
                    </LinearGradient>
                </TouchableOpacity>

                <Text style={styles.signin}>
                    By continuing you agree to our {"\n"}
                    User Agreement and Privacy Policy
                </Text>

            </View>
        </View>
    )
};

const styles = StyleSheet.create({
    screen: {
        backgroundColor: '#000',
        width: '100%',
        height: '100%',
    },
    logo: {
        padding: 30,
        marginTop: '30%',
        marginLeft: '42%',
        marginBottom: '5%',
        height: 70,
        width: 70,
    },
    titleText: {
        fontSize: 20,
        fontWeight: 'bold',
        textAlign: 'center',
        color: 'white',    
    },
    buttonContainer: {
        marginLeft: 20,
        marginRight: 20,
        paddingVertical: 10,
        marginTop: 50,
        height: 50,
        borderRadius: 40,
        borderColor: '#fff',
        borderWidth: 0.5,
        alignItems: 'center',
        justifyContent: 'center',
    },
    buttonText: {
        fontSize: 14,
        textAlign: 'center',
        color: '#FFFFFF'
    },
    button: {
        marginLeft: 20,
        marginRight: 20,
        paddingVertical: 10,
        marginTop: '40%',
        height: 50,
        borderRadius: 40,
        alignItems: 'center',
        justifyContent: 'center',
    },
    Sign: {
        fontSize: 14,
        fontWeight: '500',
        textAlign: 'center',
        color: '#fff'
    },
    signin: {
        marginTop: 15,
        marginBottom: '5%',
        fontSize: 13,
        textAlign: 'center',
        color: '#fff'
    },
});