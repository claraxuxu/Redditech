import React from 'react';
import { StatusBar } from 'expo-status-bar';
import {
    View,
    Image,
    Text,
    StyleSheet,
    TouchableOpacity,
    TextInput,
    TouchableNativeFeedback
} from 'react-native';
 
export default function Log({ navigation }) {

    const pressEmail = () => {
        navigation.navigate('LogIn');
    }

    return (
        <View style={styles.screen}>
            <View style={styles.main}>
                <Image style={styles.logo}
                source={require('../../assets/reddit_logo2.png')} />

                <Text style={styles.signin}>
                    By continuing you agree to our {"\n"}
                    User Agreement and Privacy Policy
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
                        source={require('../../assets/icon_apple.png')} />  
                        <Text style={styles.buttonText}> Sign Up with Apple </Text>
                    </View>
                </TouchableOpacity>

                <TouchableOpacity 
                    style={styles.buttonContainer}
                    background={TouchableNativeFeedback.Ripple('black',false)}
                    onPress={pressEmail}
                >
                    <View style={styles.contenu}>
                        <Image style={styles.icon}
                        source={require('../../assets/icon_email.png')} />  
                        <Text style={styles.buttonText}> Sign Up with Email </Text>
                    </View>
                </TouchableOpacity>

                <Text style={styles.signin}>
                    Already have an account? Log In Here
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
        marginLeft: '40%',
        marginBottom: '20%',
        height: 60,
        width: 60,
    },
    errormsg: {
        padding: 20,
        justifyContent: 'center',
        alignItems: 'center',
    },
    error: {
        marginTop: 30,
        fontSize: 16,
        color: "#d35400"
    },
    buttonContainer: {
        marginLeft: 20,
        marginRight: 20,
        // backgroundColor: '#241332',
        paddingVertical: 10,
        marginTop: 20,
        height: 50,
        borderRadius: 5,
        borderColor: '#fff',
        borderWidth: 0.5,
        alignItems: 'center',
        justifyContent: 'center',
    },
    contenu: {
        flexDirection: 'row',
    },
    icon: {
        marginLeft: '-25%',
        marginRight: '20%'
    },
    buttonText: {
        fontSize: 12,
        textAlign: 'center',
        color: '#FFFFFF'
    },
    signin: {
        marginTop: '10%',
        marginBottom: '5%',
        fontSize: 14,
        textAlign: 'center',
        color: '#fff'
    }
});