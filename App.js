/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow strict-local
 */

import * as React from 'react';
import { Image } from 'react-native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { NavigationContainer } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import LogWeb from './component/LogWeb';
import Home from './component/Home';
import Profile from './component/Profile';
import SubReddit from './component/subreddit';

const Stack = createNativeStackNavigator();
const Tabs = createBottomTabNavigator();

function App() {

    return (
        <NavigationContainer>
            <Tabs.Navigator>
                <Tabs.Screen options={{ headerShown: false,
                    tabBarIcon: ({focused, color, size}) => (
                        focused ?
                            <Image source={require('./assets/home_click.png')}
                            style={{
                                width: 25,
                                height: 25,
                            }}/>
                        :
                            <Image source={require('./assets/home.png')}
                            style={{
                                width: 25,
                                height: 25,
                            }}/>
                        ) }} name="Home" component={Home} />

                <Tabs.Screen options={{ headerShown: false,
                    tabBarIcon: ({focused}) => (
                        focused ?
                            <Image source={require('./assets/search_blue.png')}
                                style={{
                                    width: 30,
                                    height: 30,
                                }}/>
                        :     
                            <Image source={require('./assets/search_black.png')}
                            style={{
                                width: 25,
                                height: 25,
                            }}/>        
                      )  }} name="Search" component={SubReddit} />
                
                <Tabs.Screen options={{ headerShown: false,
                    tabBarIcon: ({focused, color, size}) => (
                        focused ?
                            <Image source={require('./assets/profile_click.png')}
                            style={{
                                width: 25,
                                height: 25,
                            }}/>
                        :
                            <Image source={require('./assets/profile.png')}
                            style={{
                                width: 25,
                                height: 25,
                            }}/>
                        ) }} name="Account" component={LogWeb} />
            </Tabs.Navigator>
        </NavigationContainer>
    )
}

export default App;