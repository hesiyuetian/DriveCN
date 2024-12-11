import {Text} from 'react-native';
import Login from './pages/login';
import Register from './pages/register';
import {RootSiblingParent} from 'react-native-root-siblings';
import {useLoading} from '../state/base/hooks';
import Loading from './components/loading';

// import { NavigationContainer, getFocusedRouteNameFromRoute } from '@react-navigation/native';
// import { createStackNavigator } from '@react-navigation/stack';
// import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';

// import { headerTitleStyle, headerChildrenTitleStyle, headerStyle } from './baseConfig/headTitleStyle';
// import { navigationRef } from './utils/RootNavigation';
// import { NativeModules, NativeEventEmitter } from 'react-native';

// import DeviceStorage from './utils/localStorage';

function Entry(): React.JSX.Element {
  const [loading, setLoading] = useLoading();
  return (
    <RootSiblingParent>
      {/* {loading && <Loading />} */}
      <Loading />
      {/* <Register /> */}
      <Login />
      {/* <Text>12312</Text> */}
    </RootSiblingParent>
  );
}

export default Entry;
