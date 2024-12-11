import {Text} from 'react-native';
import Login from './pages/login';
import Register from './pages/register';

// import { NavigationContainer, getFocusedRouteNameFromRoute } from '@react-navigation/native';
// import { createStackNavigator } from '@react-navigation/stack';
// import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';

// import { headerTitleStyle, headerChildrenTitleStyle, headerStyle } from './baseConfig/headTitleStyle';
// import { navigationRef } from './utils/RootNavigation';
// import { NativeModules, NativeEventEmitter } from 'react-native';

// import DeviceStorage from './utils/localStorage';

function Entry(): React.JSX.Element {
  return <Register />;
  // return <Login />;
  // return <Text>12312</Text>;
}

export default Entry;
