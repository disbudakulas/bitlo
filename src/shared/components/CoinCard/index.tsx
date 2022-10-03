import React, {memo, useRef} from 'react';
import {Animated, Pressable, View} from 'react-native';

//Third Party
import {observer} from 'mobx-react';
import {useNavigation} from '@react-navigation/native';

//Components
import {Text, Icon} from '@components/index';

//Utils
import appStore from 'shared/stores/appStore';

//Styles
import styles from './stlye';

//Interface
import {ICoin} from './interface';
const CoinCard = ({item}: ICoin) => {
  const navigation = useNavigation();
  const itemTransform = useRef(new Animated.Value(1)).current;

  const favoriteHandle = () => {
    if (appStore?.favorites?.includes(item?.marketCode)) {
      let arr = appStore?.favorites?.filter(i => i != item?.marketCode);
      appStore.favorites = arr;
    } else {
      appStore.favorites = [...appStore?.favorites, item?.marketCode];
    }
  };

  const selectItem = () => {
    customAnimateEvent(itemTransform, 1.25, 350, () => {
      navigation.navigate('MarketDetail', {market: item});
      customAnimateEvent(itemTransform, 1, 500);
    });
  };

  const customAnimateEvent = (
    refer: Animated.Value,
    value: number,
    duration: number,
    call?: () => null | undefined | void,
  ) =>
    Animated.timing(refer, {
      toValue: value,
      duration: duration,
      useNativeDriver: false,
    }).start(call);

  return (
    <Pressable onPress={selectItem}>
      <Animated.View
        style={{
          transform: [{scale: itemTransform}],
        }}>
        <View style={styles.container}>
          <Pressable onPress={favoriteHandle} hitSlop={8}>
            <Icon
              name={
                appStore?.favorites?.includes(item?.marketCode)
                  ? 'star : materialcomm'
                  : 'star-outline : materialcomm'
              }
              size={25}
              color="#fff"
            />
          </Pressable>
          <View style={styles.cardContentLeft}>
            <Text style={styles.codeStyle}>
              {item?.marketCode.split('-')?.[0]}
              <Text>/{item?.marketCode.split('-')?.[1]}</Text>
            </Text>
          </View>
          <View style={styles.cardContentMid}>
            <Text style={styles.codeStyle}>
              {new Intl.NumberFormat('tr-TR', {
                style: 'currency',
                currency: 'TRY',
              }).format(Number(item?.currentQuote).toFixed(2))}
            </Text>
            <Text style={styles.currencyStyle}>
              {new Intl.NumberFormat('en-US', {
                style: 'currency',
                currency: 'usd',
              }).format((Number(item?.currentQuote) / 18.5).toFixed(2))}
            </Text>
          </View>
          <View style={styles.cardContentRight}>
            <View
              style={[
                styles.valueDisplay,
                {
                  backgroundColor:
                    Number(item?.change24hPercent) < 0 ? '#ef495a' : '#33ba86',
                },
              ]}>
              <Text style={styles.valueDisplayText}>
                {Number(item?.change24hPercent).toFixed(2)}
              </Text>
            </View>
          </View>
        </View>
      </Animated.View>
    </Pressable>
  );
};

const isEqual = (prev: any, next: any) => {
  return prev?.item?.marketCode != next?.item?.marketCode;
};

export default memo(observer(CoinCard), isEqual);
