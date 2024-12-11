import {SafeAreaView, StatusBar, Text} from 'react-native';
import Login from './pages/login';
import Register from './pages/register';
import {useLoading} from '../state/base/hooks';
import Loading from './components/loading';

import {NavigationContainer} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';

const Stack = createNativeStackNavigator();
const Tab = createBottomTabNavigator();

// 底部导航组件
function TabNavigator() {
  return (
    <Tab.Navigator>
      <Tab.Screen name="Home" component={Login} />
    </Tab.Navigator>
  );
}

function Entry(): React.JSX.Element {
  const [loading, setLoading] = useLoading();
  return (
    <>
      <NavigationContainer>
        <Stack.Navigator initialRouteName="Login">
          <Stack.Screen
            name="Login"
            component={Login}
            options={{headerShown: false}}
          />
          <Stack.Screen
            name="Register"
            component={Register}
            options={{headerShown: false}}
          />

          <Stack.Screen
            name="MainApp"
            component={TabNavigator}
            options={{headerShown: false}}
          />
        </Stack.Navigator>
      </NavigationContainer>
      <Loading />
    </>
  );
}

export default Entry;
