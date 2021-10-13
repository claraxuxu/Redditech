import React from 'react';
import { WebView } from 'react-native-webview';
 
export default LogWeb = () => {

    return (
        <WebView
            source={{ uri: 'https://www.reddit.com/login/?dest=https%3A%2F%2Fwww.reddit.com%2Fapi%2Fv1%2Fauthorize%3Fclient_id%3DQzIXD5c6dy5sVJC_Yy81pg%26response_type%3Dcode%26state%3DRANDOM_STRING%26redirect_uri%3Dhttp%253A%252F%252Flocalhost%253A19000%26duration%3Dtemporary%26scope%3Didentity'}}
            onError={(event) => alert(`WebView error ${event.nativeEvent.description}`)}
        />
    )
};
