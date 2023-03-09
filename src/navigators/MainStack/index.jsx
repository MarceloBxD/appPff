import {createStackNavigator} from '@react-navigation/stack';

import Preload from '../../screens/Preload';
import MainTab from '../MainTab';
import MakeAppointment from '../../screens/MakeAppointment';

const Stack = createStackNavigator();

export default () => (
  <Stack.Navigator
    initialRouteName="Preload"
    screenOptions={{
      headerShown: false,
    }}>
    <Stack.Screen name="Preload" component={Preload} />
    <Stack.Screen name="Main" component={MainTab} />
    <Stack.Screen name="MakeAppointment" component={MakeAppointment} />
  </Stack.Navigator>
);
