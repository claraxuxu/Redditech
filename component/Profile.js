import React from 'react';
import { StyleSheet, View, Button } from 'react-native';
import Logweb from './LogWeb';

const Profile = ({navigation}) => {
    const getUser = async () => {
        try {
            const res = await fetch('https://oauth.reddit.com/api/v1/me', {
                method: 'GET',
                headers: {
                    'Content-Type': 'application/x-www-form-urlencoded',
                    'Authorization': 'Bearer ' + global.authState.accessToken,
            }
            });
            const json = await res.json();
            console.log(json)
        }
        catch(e) {
            console.error(e);
        }
    }
    return (
        <View style={styles.button}> 
            <Button
                title= 'fetch'
                onPress= {() => {console.log(getUser())}}
            />
        </View>
    );
}

const styles = StyleSheet.create({
    button: {
        marginTop: 50
    }
});

export default Profile;

