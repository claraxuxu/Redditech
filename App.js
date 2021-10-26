/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow strict-local
 */

import * as React from 'react';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { NavigationContainer } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import LogWeb from './component/LogWeb';
import Home from './component/Home';
import Profile from './component/Profile';

const Stack = createNativeStackNavigator();
const Tabs = createBottomTabNavigator();

function App() {

    return (
        <NavigationContainer>
            <Tabs.Navigator>
                <Tabs.Screen options={{ headerShown: false,
                    tarBarIcon: ({focused}) => (
                         <View>
                             <Image source={require('./assets/home.png')}
                                resizeMode = 'container'
                                style={{
                                    width: 25,
                                    height: 25,
                                }}
                             />
                         </View>
                    )  }} name="Home" component={Home} 
                />
                <Tabs.Screen options={{ headerShown: false }} name="Account" component={LogWeb} />
            </Tabs.Navigator>
        </NavigationContainer>
    )
}

export default App;