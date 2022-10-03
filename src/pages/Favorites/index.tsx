import React from 'react';
import {FlatList, SafeAreaView} from 'react-native';

//Third Party
import {observer} from 'mobx-react';

//Components
import {CoinCard} from '@components/index';

//Utils
import appStore from 'shared/stores/appStore';
import {IMarket} from 'shared/types/interfaces';

//Styles
import styles from './stlye';

const Favorites = () => {
  const RenderItem = ({item}: {item: IMarket}) => <CoinCard item={item} />;
  return (
    <SafeAreaView style={styles.container}>
      <FlatList
        data={appStore?.markets?.flatMap(i => {
          if (appStore.favorites?.includes(i?.marketCode)) {
            return i;
          }
          return [];
        })}
        renderItem={RenderItem}
        contentContainerStyle={styles.flatListContainer}
        showsVerticalScrollIndicator={false}
        keyExtractor={item => item?.marketCode}
      />
    </SafeAreaView>
  );
};

export default observer(Favorites);
