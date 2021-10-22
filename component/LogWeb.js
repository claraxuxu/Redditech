import React from 'react';
import { useCallback } from 'react';
import { authorize } from 'react-native-app-auth';
import { Image, TouchableOpacity, 
          View, Text, StyleSheet,
          StatusBar } from 'react-native';
import LinearGradient from 'react-native-linear-gradient';

const config = {
  redirectUrl: 'com.epicture://oauth2redirect/reddit',
  clientId: 'QzIXD5c6dy5sVJC_Yy81pg',
  clientSecret: '', // empty string - needed for iOS
  scopes: ['identity'],
  serviceConfiguration: {
    authorizationEndpoint: 'https://www.reddit.com/api/v1/authorize.compact',
    tokenEndpoint: 'https://www.reddit.com/api/v1/access_token',
  },
  customHeaders: {
    token: {
      Authorization: 'Basic UXpJWEQ1YzZkeTVzVkpDX1l5ODFwZw==',
    },
  },
};

const Logweb = ({ navigation }) => {
  const getToken = useCallback(
    async lave => {
        try {
            global.authState = await authorize(config);
            console.log(authState)
            if (global.authState)
              navigation.push("Home");
            // console.log("authState.accessToken")
        }
        catch(e) {
          console.log(e)
        }
    },
  )

  return (
    <View style={styles.container}>
      <StatusBar
        animated={true}
        backgroundColor="#000"/>
      <Image style={styles.logo}
        source={require('../assets/reddit_logo.png')} />

      <TouchableOpacity
        onPress= {() => {getToken()}}
      >
        <LinearGradient
          start={{x: 0, y: 0.75}}
          end={{x: 1, y: 0.25}}
          colors={['#DE190B', '#DE7502']}
          style={styles.button}>
          <Text style={styles.textButton}>LOG IN</Text>
        </LinearGradient>
      </TouchableOpacity>

      <Text style={styles.signin}>
          By continuing you agree to our {"\n"}
          User Agreement and Privacy Policy{"\n"}
      </Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#000"
  },
  logo: {
    padding: 30,
    marginTop: '30%',
    marginLeft: '40%',
    marginBottom: '50%',
    height: 70,
    width: 70,
  },
  button : {
    marginTop: 10,
    marginRight: "2%",
    marginLeft: "2%",
    paddingVertical: 10,
    height: 50,
    borderRadius: 40,
    alignItems: 'center',
    justifyContent: 'center',
  },
  textButton: {
    fontSize: 14,
    textAlign: 'center',
    color: '#FFFFFF'
  },
  signin: {
    marginTop: 15,
    marginBottom: '5%',
    fontSize: 13,
    textAlign: 'center',
    color: '#fff'
  },
});

export default Logweb;