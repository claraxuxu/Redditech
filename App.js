import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import Navigator from './navigator/homestack';

export default () => {
  return (
    <Navigator />
  );
};


// const discovery = {
//   authorizationEndpoint: 'https://www.reddit.com/api/v1/authorize.compact',
//   tokenEndpoint: 'https://www.reddit.com/api/v1/access_token',
// };

// export default function App() {
//   const [request, response, promptAsync] = useAuthRequest(
//     {
//       clientId: 'CLIENT_ID',
//       scopes: ['identity'],
//       redirectUri: makeRedirectUri({
//         // For usage in bare and standalone
//         native: 'your.app://redirect',
//       }),
//     },
//     discovery
//   );

//   React.useEffect(() => {
//     if (response?.type === 'success') {
//       const { code } = response.params;
//       }
//   }, [response]);

//   return (
//     <Button
//       disabled={!request}
//       title="Login"
//       onPress={() => {
//         promptAsync();
//         }}
//     />
//   );
// }