import { createStackNavigator } from 'react-navigation-stack';
import { createAppContainer } from 'react-navigation'
import Log from '../component/Log/Log';
import LogIn from '../component/Log/LogIn';
import SignUp from '../component/Log/SignUp';
import LogWeb from '../component/Log/LogWeb';

const screens = {
  Home: {
    screen: Log
  },
  LogIn: {
    screen: LogIn
  },
  SignUp: {
    screen: SignUp
  },
  LogWeb: {
    screen: LogWeb
  }
}

const HomeStack = createStackNavigator(screens, {
  defaultNavigationOptions: {
    headerShown: false
  }
});

export default createAppContainer(HomeStack);