import {useLayoutEffect} from 'react';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import {Image} from 'react-native';

const Tab = createBottomTabNavigator();

import Home from '../../screens/Home';
import Schedules from '../../screens/Schedules';
import About from '../../screens/About';

import HomeIcon from '../../assets/home.png';
import SchedulesIcon from '../../assets/mais.png';
import AboutIcon from '../../assets/sobre.png';

export default () => {

  return (
    <Tab.Navigator
      screenOptions={{
        headerShown: false,
        tabBarShowLabel: false,
        tabBarStyle: {
          backgroundColor: '#00eaff',
          position: 'absolute',
          borderTopWidth: 0,
          bottom: 14,
          left: 14,
          right: 14,
          elevation: 0,
          borderRadius: 15,
          height: 60,
        },
      }}>
      <Tab.Screen
        options={{
          tabBarIcon: ({focused}) => (
            <Image
              source={HomeIcon}
              resizeMode="contain"
              style={{
                width: 25,
                height: 25,
                tintColor: focused ? '#FFFFFF' : '#888',
              }}
            />
          ),
        }}
        name="Home"
        component={Home}
      />
      <Tab.Screen
        options={{
          headerShown: true,
          tabBarIcon: ({focused}) => (
            <Image
              source={SchedulesIcon}
              resizeMode="contain"
              style={{
                width: 60,
                backgroundColor: '#00eaff',
                borderRadius: 30,
                borderColor: '#FFFFFF',
                borderWidth: 2,
                height: 60,
                marginTop: -50,
              }}
            />
          ),
        }}
        name="Schedules"
        component={Schedules}
      />
      <Tab.Screen
        options={{
          tabBarIcon: ({focused}) => (
            <Image
              source={AboutIcon}
              resizeMode="contain"
              style={{
                width: 25,
                height: 25,
                tintColor: focused ? '#FFFFFF' : '#888',
              }}
            />
          ),
        }}
        name="About"
        component={About}
      />
    </Tab.Navigator>
  );
};
