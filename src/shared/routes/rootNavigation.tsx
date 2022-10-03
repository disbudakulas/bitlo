import React from 'react';

//Third Party
import {DefaultTheme, NavigationContainer} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';

//Routes
import AppNavigation from './appNavigation';

//Pages
import Loading from '@pages/Loading';
import MarketDetail from '@pages/MarketDetail';
import Auth from '@pages/Auth';

const RootNavigation = ({auth}: any) => {
  const Stack = createNativeStackNavigator();

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
    <NavigationContainer theme={MyTheme}>
      <Stack.Navigator
        initialRouteName={auth ? 'Loading' : 'Auth'}
        screenOptions={{headerShown: false}}>
        <Stack.Screen name="Auth" component={Auth} />
        <Stack.Screen name={'Loading'} component={Loading} />
        <Stack.Screen name={'AppNavigation'} component={AppNavigation} />
        <Stack.Screen
          name={'MarketDetail'}
          component={MarketDetail}
          options={{
            headerShown: true,
            title: 'Emir Defteri',
            headerBackTitle: '',
            headerTitleStyle: {
              fontSize: 18,
              color: '#fff',
            },
          }}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default RootNavigation;
