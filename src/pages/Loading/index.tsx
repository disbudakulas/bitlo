import React, {useEffect} from 'react';
import {View} from 'react-native';

//Third Party
import FastImage from 'react-native-fast-image';
import {useNavigation} from '@react-navigation/native';

//Utils
import mainService from 'shared/services/main-service';
import appStore from 'shared/stores/appStore';
import {IMarket} from 'shared/types/interfaces';

//Styles
import styles from './stlye';

const LOGO = require('@assets/logo-white.png');

const Loading = () => {
  const navigation = useNavigation<any>();

  useEffect(() => {
    getInit();
  }, []);

  const getInit = () => {
    mainService
      .getMarkets()
      .then((res: any) => res?.data)
      .then((res: Array<IMarket>) => {
        appStore.markets = res;
        navigation.reset({
          index: 1,
          routes: [{name: 'AppNavigation'}],
        });
      })
      .catch(err => {
        console.log(err);
      });
  };

  return (
    <View style={styles.container}>
      <FastImage source={LOGO} style={styles.logoStyle} resizeMode="contain" />
    </View>
  );
};

export default Loading;
