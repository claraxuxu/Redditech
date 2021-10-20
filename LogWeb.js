import React from 'react';
import { useCallback } from 'react';
import { authorize } from 'react-native-app-auth';
import { Button, View, StyleSheet } from 'react-native'

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

const Logweb = () => {
  const getToken = useCallback(
    async lave => {
        try {
            global.authState = await authorize(config);
        }
        catch(e) {
          console.log(e)
        }
    },
  )
  return (
    <View style={styles.button}>
      <Button
        title= 'Log in'
        onPress= {() => {getToken()}}
        color= 'red'
      />
    </View>
  );
}

const styles = StyleSheet.create({
  button : {
    marginTop: '50%'
  }
});

export default Logweb