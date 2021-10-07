import { createStackNavigator } from 'react-navigation-stack';
import { createAppContainer } from 'react-navigation'
import Log from '../component/Log/Log';
import LogIn from '../component/Log/LogIn';
import SignUp from '../component/Log/SignUp';

const screens = {
  Home: {
    screen: Log
  },
  LogIn: {
    screen: LogIn
  },
  SignUp: {
    screen: SignUp
  }
}

const HomeStack = createStackNavigator(screens, {
  defaultNavigationOptions: {
    headerShown: false
  }
});

export default createAppContainer(HomeStack);