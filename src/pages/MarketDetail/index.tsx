import React, {useEffect, useState} from 'react';
import {FlatList, Pressable, SafeAreaView, Text, View} from 'react-native';

//Third Party
import {observer} from 'mobx-react';

//Components
import {Icon} from 'shared/components';

//Utils
import mainService from 'shared/services/main-service';
import {IAsk, IBid, IMarket, IMarketDetail} from 'shared/types/interfaces';
import appStore from 'shared/stores/appStore';

//Styles
import styles from './stlye';

const DEPTH = 30;

const MarketDetail = (props: any) => {
  const market: IMarket = props?.route?.params?.market;
  const [data, setData] = useState<IMarketDetail>({
    sequenceId: undefined,
    bids: [],
    asks: [],
  });

  useEffect(() => {
    mainService
      .getMarketDetail({market: market?.marketCode, depth: DEPTH})
      .then((res: any) => res?.data)
      .then(res => {
        setData(res);
      })
      .catch(err => console.log(JSON.stringify(err)));
  }, []);

  const favoriteHandle = () => {
    if (appStore?.favorites?.includes(market?.marketCode)) {
      let arr = appStore?.favorites?.filter(i => i != market?.marketCode);
      appStore.favorites = arr;
    } else {
      appStore.favorites = [...appStore?.favorites, market?.marketCode];
    }
  };

  const RenderItem = ({item, index}: {item: IAsk; index: number}) => {
    return (
      <View
        style={[
          styles.itemRow,
          {backgroundColor: index % 2 == 0 ? '#1d2731' : '#252f38'},
        ]}>
        <Text style={styles.itemText}>
          {new Intl.NumberFormat('tr-TR', {
            style: 'currency',
            currency: 'TRY',
          }).format(Number((item?.[0] || 0) * (item?.[1] || 0)).toFixed(2))}
        </Text>
        <Text style={styles.itemText}>
          {Number(item?.[1] || 0)?.toFixed(6)}
        </Text>
        <Text style={styles.itemText}>
          {new Intl.NumberFormat('tr-TR', {
            style: 'currency',
            currency: 'TRY',
          }).format(Number(item?.[0] || 0).toFixed(2))}
        </Text>
      </View>
    );
  };

  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.marketContainer}>
        <Pressable onPress={favoriteHandle} hitSlop={8}>
          <Icon
            name={
              appStore?.favorites?.includes(market?.marketCode)
                ? 'star : materialcomm'
                : 'star-outline : materialcomm'
            }
            size={25}
            color="#fff"
          />
        </Pressable>
        <View style={styles.cardContentLeft}>
          <Text style={styles.codeStyle}>
            {market?.marketCode.split('-')?.[0]}
          </Text>
        </View>
        <View style={styles.cardContentRight}>
          <Text style={styles.valueDisplayText}>Güncel Fiyat</Text>
          <Text style={styles.priceDisplayText}>
            {new Intl.NumberFormat('tr-TR', {
              style: 'currency',
              currency: 'TRY',
            }).format(Number(market?.currentQuote).toFixed(2))}
          </Text>
        </View>
      </View>

      <View style={styles.bodyContainer}>
        <Text style={styles.titleText}>Bekleyen En İyi {DEPTH} Alış Emri</Text>
        <View style={styles.columnRow}>
          <Text style={styles.columnText}>
            Toplam ({market?.marketCode?.split('-')?.[1]})
          </Text>
          <Text style={styles.columnText}>
            Miktar ({market?.marketCode?.split('-')?.[0]})
          </Text>
          <Text style={styles.columnText}>Alış Fiyatı</Text>
        </View>
        <FlatList
          data={data?.asks}
          renderItem={RenderItem}
          showsVerticalScrollIndicator={false}
          keyExtractor={(item: IAsk, index: number) =>
            Number(item?.[0]) * Number(item?.[1]) + index
          }
        />
      </View>
      <View style={styles.bodyContainer}>
        <Text style={styles.titleText}>Bekleyen En İyi {DEPTH} Satış Emri</Text>
        <View style={styles.columnRow}>
          <Text style={styles.columnText}>
            Toplam ({market?.marketCode?.split('-')?.[1]})
          </Text>
          <Text style={styles.columnText}>
            Miktar ({market?.marketCode?.split('-')?.[0]})
          </Text>
          <Text style={styles.columnText}>Satış Fiyatı</Text>
        </View>
        <FlatList
          data={data?.bids}
          renderItem={RenderItem}
          showsVerticalScrollIndicator={false}
          keyExtractor={(item: IBid, index: number) =>
            Number(item?.[0]) * Number(item?.[1]) + index
          }
        />
      </View>
    </SafeAreaView>
  );
};

export default observer(MarketDetail);
