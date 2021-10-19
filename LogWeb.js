import React, { useCallback } from 'react';
import { Linking, StyleSheet } from 'react-native';
import { authorize } from 'react-native-app-auth';

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

const getToken = useCallback(
    async lave => {
        try {
            const authState = await authorize(config);
        }
        catch(e) {

        }
    },
)

export default LogWeb = () => {
    <Button
        onPress = {() => {getToken()}}>
    </Button>
}
const styles = StyleSheet.create({
    entire: {
        marginTop: 20
    }
});