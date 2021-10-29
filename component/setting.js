import React, { useEffect, useState } from 'react';
import {
    View,
    StyleSheet,
    Text
} from 'react-native';

function Setting({ navigation }) {
    const getSetting = useCallback(
        async lave => {
            try {
                const res = await fetch('https://oauth.reddit.com/api/v1/me/pref', {
                  method: 'GET',
                  headers: {
                    'Content-Type': 'application/x-www-form-urlencoded',
                    'Authorization': 'Bearer ' + global.authState.accessToken,
                  }
                });
                global.resBody = await res.json();
                console.log(resBody)
                setLogged(true)
            }
            catch(e) {
              console.log(e)
            }
        },
      )
    return (
        <View style={styles.container}>
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
      flex: 1,
      alignItems: 'center',
    }
})
  
export default Setting;