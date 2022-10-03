//Third Party
import {makeAutoObservable} from 'mobx';
import {makePersistable} from 'mobx-persist-store';
import AsyncStorage from '@react-native-async-storage/async-storage';

//Interfaces
import {IMarket} from 'shared/types/interfaces';

class appStore {
  constructor() {
    makeAutoObservable(this, {}, {autoBind: true});
    makePersistable(this, {
      name: 'appStore',
      properties: ['favorites'],
      storage: AsyncStorage,
    });
  }

  markets: IMarket[] = [];
  favorites: Array<string> = [];
}

export default new appStore();
