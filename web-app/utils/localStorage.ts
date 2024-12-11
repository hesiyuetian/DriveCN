// import { AsyncStorage }from 'react-native';
import AsyncStorage from '@react-native-community/async-storage';
export default class DeviceStorage {
  static get(key: any) {
    return AsyncStorage.getItem(key).then(value => {
      return value ? JSON.parse(value) : '';
    });
  }

  static set(key: any, value: any) {
    return AsyncStorage.setItem(key, JSON.stringify(value));
  }

  static update(key: any, value: any) {
    return DeviceStorage.get(key).then(item => {
      value =
        typeof value === 'string' ? value : Object.assign({}, item, value);
      return AsyncStorage.setItem(key, JSON.stringify(value));
    });
  }

  static delete(key: any) {
    return AsyncStorage.removeItem(key);
  }

  static clear() {
    return AsyncStorage.clear();
  }
}
