// import { AsyncStorage }from 'react-native';
import AsyncStorage from '@react-native-community/async-storage';
export default class DeviceStorage {
    static get(key) {
        return AsyncStorage.getItem(key).then(value => {
            return value ? JSON.parse(value) : '';
        });
    }

    static set(key, value) {
        return AsyncStorage.setItem(key, JSON.stringify(value));
    }
    
    static update(key, value) {
        return DeviceStorage.get(key).then(item => {
            value = typeof value === 'string' ? value : Object.assign({}, item, value);
            return AsyncStorage.setItem(key, JSON.stringify(value));
        });
    }

    static delete(key) {
        return AsyncStorage.removeItem(key);
    }

    static clear() {
        return AsyncStorage.clear();
    }
}
