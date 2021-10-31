import React, { useState, useEffect } from 'react';
import { useCallback } from 'react';
import { authorize } from 'react-native-app-auth';
import { Image, TouchableOpacity, 
          View, Text, StyleSheet,
          StatusBar, Dimensions } from 'react-native';
import LinearGradient from 'react-native-linear-gradient';
import Profile from './Profile';
import Pdf from 'react-native-pdf';

const config = {
  redirectUrl: 'com.epicture://oauth2redirect/reddit',
  clientId: 'QzIXD5c6dy5sVJC_Yy81pg',
  clientSecret: '', // empty string - needed for iOS
  scopes: ['identity', 'mysubreddits', 'edit'],
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
  const [isPDF, setPDF] = useState(false);
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

  if (isLogged === true) {
    return ( <Profile /> );
  }

  else if (isPDF === true) {
    return (
      <View>
        <Text style={{color: "#000", fontSize: 16}} onPress={() => setPDF(false)}>back</Text>
        <Pdf
          source={{uri: "https://maipdf.com/pdf/?e=enec5Os6Y9Cmg6"}}
          onError={(error)=>{console.log(error);}}
          style={styles.pdf}
        />
      </View>
    )
  } else {
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
            By continuing you agree to our
        </Text>
        <Text style={styles.signin} onPress={() => setPDF(true)}>
            User Agreement and Private Policy
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
    marginTop: 5,
    fontSize: 13,
    textAlign: 'center',
    color: '#000'
  },
  pdf: {
    width:Dimensions.get('window').width,
    height:Dimensions.get('window').height,
  }
});

export default Logweb;