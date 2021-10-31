import React, { useState, useCallback } from 'react';
import { authorize } from 'react-native-app-auth';
import { Image, TouchableOpacity, 
          View, Text, StyleSheet,
          StatusBar } from 'react-native';
import LinearGradient from 'react-native-linear-gradient';
import Profile from './Profile';

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

  const [isLogged, setLogged] = useState(false);
  const getToken = useCallback(
    async lave => {
        try {
            global.authState = await authorize(config);
            authState => authState.json()
            const res = await fetch('https://oauth.reddit.com/api/v1/me', {
              method: 'GET',
              headers: {
                'Content-Type': 'application/x-www-form-urlencoded',
                'Authorization': 'Bearer ' + global.authState.accessToken,
              }
            });
            global.resBody = await res.json();
            setLogged(true)
        }
        catch(e) {
          console.log(e)
        }
    },
  )

  if (isLogged) {
    return (
      <Profile />
    );
  }
  else {
    return (
      <View style={styles.container}>
        <StatusBar
          translucent 
          animated={true}/>
        <Image style={styles.logo}
          source={require('../assets/reddit_blue.png')} />
        <Text style={styles.name}>Redditech</Text>

        <TouchableOpacity
          onPress= {() => {getToken()}}
        >
          <LinearGradient
            start={{x: 0, y: 0.75}}
            end={{x: 1, y: 0.25}}
            colors={['#465881', '#40A6DB']}
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
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#FCFCFB",
    alignItems: 'center'
  },
  logo: {
    padding: 30,
    marginTop: '30%',
    marginBottom: '3%',
    height: 200,
    width: 200,
  },
  name: {
    fontFamily: 'Comfortaa-Bold',
    fontSize: 30,
    color: '#40A6DB',
    marginBottom: '60%',
  },
  button : {
    width: 300,
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