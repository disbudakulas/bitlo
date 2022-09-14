import React from 'react';

//Third Party
import {NavigationContainer} from '@react-navigation/native';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import Entypo from 'react-native-vector-icons/Entypo';

//Pages
import Home from '@pages/Home';
import Markets from '@pages/Markets';
import About from '@pages/About';

const RootNavigation = () => {
  const Tab = createBottomTabNavigator();

  return (
    <NavigationContainer>
      <Tab.Navigator>
        <Tab.Screen
          name="Home"
          options={{
            tabBarIcon: ({color, size}) => {
              return <Entypo name="home" color={color} size={size} />;
            },
          }}
          component={Home}
        />
        <Tab.Screen
          name="Markets"
          options={{
            tabBarIcon: ({color, size}) => {
              return <Entypo name="shop" color={color} size={size} />;
            },
          }}
          component={Markets}
        />
        <Tab.Screen
          name="About"
          options={{
            tabBarIcon: ({color, size}) => {
              return <Entypo name="info" color={color} size={size} />;
            },
          }}
          component={About}
        />
      </Tab.Navigator>
    </NavigationContainer>
  );
};

export default RootNavigation;
