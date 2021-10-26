import * as React from 'react';
import { createStackNavigator } from '@react-navigation/stack';
import { NavigationContainer } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { LogWeb } from '../component/LogWeb';
import { Home } from '../component/Home';

const Stack = createStackNavigator();
const Tabs = createBottomTabNavigator();

function HomeStack() {
    return (
        <NavigationContainer>
            <Tabs.Navigator>
                <Tabs.Screen name="LogWeb" component={LogWeb} />
                <Tabs.Screen name="Home" component={Home} />
            </Tabs.Navigator>
        </NavigationContainer>
    )
}

export default HomeStack;

// <NavigationContainer>
            {/* <Stack.Navigator>
                <Stack.Screen name="LogWeb" component={LogWeb} />
                <Stack.Screen name="Home" component={Home} />
            </Stack.Navigator> */}
            // </NavigationContainer>