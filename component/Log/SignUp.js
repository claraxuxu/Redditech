import React from 'react';
import { StatusBar } from 'expo-status-bar';
import {
    View,
    Image,
    Text,
    StyleSheet,
    TouchableOpacity,
    BVLinearGradient,
    TextInput,
    TouchableNativeFeedback
} from 'react-native';
import { LinearGradient } from 'expo-linear-gradient';
 
export default function SignUp({ navigation }) {

    const preLogIn = () => {
        navigation.navigate('LogIn');
    }

    return (
        <View style={styles.screen}>
            <LinearGradient
            colors={['white', '#FFE2D7']}
            style={styles.background}
            >
            <View style={styles.main}>
                <Image style={styles.logo}
                source={require('../../assets/reddit_logo2.png')} />

                <TextInput 
                    style={styles.inputContainer}
                    placeholder="Pseudo"
                >
                </TextInput>

                <TextInput 
                    style={styles.inputContainer}
                    placeholder="Email"
                >
                </TextInput>

                <TextInput 
                    style={styles.inputContainer}
                    placeholder="Password"
                >
                </TextInput>

                <TextInput 
                    style={styles.inputContainer}
                    placeholder="Retype Password"
                >
                </TextInput>

                <Text style={styles.or}>
                    - or -
                </Text>

                <TouchableOpacity 
                    style={styles.buttonContainer}
                    background={TouchableNativeFeedback.Ripple('black',false)}
                >
                    <View style={styles.contenu}>
                        <Image style={styles.icon}
                        source={require('../../assets/icon_google.png')} />  
                        <Text style={styles.buttonText}> Sign Up with Google </Text>
                    </View>
                </TouchableOpacity>

                <TouchableOpacity 
                    style={styles.buttonContainer}
                    background={TouchableNativeFeedback.Ripple('black',false)}
                >
                    <View style={styles.contenu}>
                        <Image style={styles.icon}
                        source={require('../../assets/icon_apple_black.png')} />  
                        <Text style={styles.buttonText}> Sign Up with Apple </Text>
                    </View>
                </TouchableOpacity>

                <TouchableOpacity
                onPress={preLogIn}
                >
                    <Text style={styles.signup}>
                        Already an redditor? Log In
                    </Text>
                </TouchableOpacity>
            </View>
            </LinearGradient>
        </View>
    )
};

const styles = StyleSheet.create({
    screen: {
        width: '100%',
        height: '100%',
    },
    background: {
        position: 'absolute',
        left: 0,
        right: 0,
        top: 0,
        height: "100%",
    },
    logo: {
        padding: 30,
        marginTop: '30%',
        marginLeft: '40%',
        marginBottom: '10%',
        height: 60,
        width: 60,  
    },
    forgot: {
        marginTop: '8%',
        marginBottom: '2%',
        fontSize: 14,
        textAlign: 'center',
        color: '#002482'
    },
    or:{
        marginTop: 15,
        fontSize: 14,
        textAlign: 'center',
        color: '#404040'
    },
    signup: {
        marginTop: '10%',
        marginBottom: '5%',
        fontSize: 14,
        textAlign: 'center',
        color: '#404040'
    },
    inputContainer: {
        marginLeft: 20,
        marginRight: 20,
        // paddingVertical: 5,
        marginTop: 3,
        height: 50,
        borderBottomColor: '#404040',
        borderBottomWidth: 0.5,
        alignItems: 'flex-start',
        justifyContent: 'center',
    },
    buttonContainer: {
        marginLeft: 20,
        marginRight: 20,
        paddingVertical: 10,
        marginTop: 20,
        height: 50,
        borderRadius: 5,
        borderColor: '#404040',
        borderWidth: 0.5,
        alignItems: 'center',
        justifyContent: 'center',
    },
    contenu: {
        flexDirection: 'row',
    },
    icon: {
        marginLeft: "-25%",
        marginRight: '20%'
    },
    buttonText: {
        fontSize: 12,
        textAlign: 'center',
        color: '#404040'
    },
});