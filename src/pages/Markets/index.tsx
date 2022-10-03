import React from 'react';
import {FlatList, SafeAreaView} from 'react-native';

//Components
import {CoinCard} from '@components/index';

//Utils
import appStore from 'shared/stores/appStore';
import {IMarket} from 'shared/types/interfaces';

//Styles
import styles from './stlye';

const Markets = () => {
  const RenderItem = ({item}: {item: IMarket}) => <CoinCard item={item} />;
  return (
    <SafeAreaView style={styles.container}>
      <FlatList
        data={appStore?.markets}
        renderItem={RenderItem}
        contentContainerStyle={styles.flatListContainer}
        showsVerticalScrollIndicator={false}
      />
    </SafeAreaView>
  );
};

export default Markets;
