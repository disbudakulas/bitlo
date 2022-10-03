import React from 'react';

//Third Party
import {DefaultTheme, NavigationContainer} from '@react-navigation/native';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';

//Component
import {Icon} from 'shared/components';

//Pages
import Profile from '@pages/Profile';
import Markets from '@pages/Markets';
import Favorites from '@pages/Favorites';
import About from '@pages/About';

const RootNavigation = () => {
  const Tab = createBottomTabNavigator();

  const MyTheme = {
    ...DefaultTheme,
    colors: {
      ...DefaultTheme.colors,
      background: '#141c24',
      card: '#292d39',
      primary: '#fff',
      text: '#818181',
    },
  };

  return (
    <Tab.Navigator screenOptions={{headerShown: false}}>
      <Tab.Screen
        name="markets"
        options={{
          title: 'Market',
          tabBarIcon: ({color, size}) => {
            return <Icon name="coins : font5" color={color} size={size} />;
          },
        }}
        component={Markets}
      />
      <Tab.Screen
        name="favorites"
        options={{
          title: 'Favoriler',
          tabBarIcon: ({color, size}) => {
            return <Icon name="star : font" color={color} size={size} />;
          },
        }}
        component={Favorites}
      />
      <Tab.Screen
        name="about"
        options={{
          title: 'Hakkımızda',
          tabBarIcon: ({color, size}) => {
            return (
              <Icon
                name="info-with-circle : entypo"
                color={color}
                size={size}
              />
            );
          },
        }}
        component={About}
      />
      <Tab.Screen
        name="profile"
        options={{
          title: 'Profil',
          tabBarIcon: ({color, size}) => {
            return <Icon name="user : font5" color={color} size={size} />;
          },
        }}
        component={Profile}
      />
    </Tab.Navigator>
  );
};

export default RootNavigation;
