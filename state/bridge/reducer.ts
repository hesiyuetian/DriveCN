import {createSlice} from '@reduxjs/toolkit';
import DeviceStorage from '../../web-app/utils/localStorage';
import service from '../../web-app/utils/serviceApi';

const updateLocationsMap = async (state: any, locationsMap: any) => {
  const maxDiff = 24 * 60 * 60 * 1000; //开始服务订单超过24小时， 不允许上传
  // const maxDiff = 3 * 60 * 1000; //开始服务订单超过24小时， 不允许上传
  const nowTimes = Date.now();
  const diff =
    Number(nowTimes) - Number(state.locationsMap.startServiceTimestamp);
  if (diff > maxDiff) {
    console.log(
      '---超过24小时: clear',
      nowTimes,
      state.locationsMap.startServiceTimestamp,
    );
    state.location.stopLocation();
    state.removeListenerLocation();
    await DeviceStorage.delete('locationMap');
    return;
  }
  const params = {
    orderId: locationsMap.orderId,
    trackList: locationsMap.locations,
  };
  // console.log('---updataLocationsMap: ', params)
  // console.log('---updataLocationsMap---locationsMap: ', locationsMap.orderId, locationsMap.length, locationsMap);
  // console.log('---updataLocationsMap---locationsMap[0]: ', locationsMap.locations[0])
  service
    .uploadTrack(params)
    .then((res: any) => {
      console.log('updataLocationsMap----success');
    })
    .catch(e => {
      console.log('updataLocationsMap----error', e);
    });
};

const initialState = {
  location: null,
  locationEmitter: null, // 监听
  locationStatus: false, // 是否正在获取轨迹

  test: 11, // 监听
  listrner: null, // 监听
  canchLocations: [], // 临时缓存  每10坐标写入内存一次
  locationsMap: {
    orderDriverId: '', //36, //司机id  小圆球跳转详情页用到的参数
    orderId: '', // 订单号
    startServiceTimestamp: '', // 订单号
    locations: [], // 位置集合
  },
} as any;

const BaseInfoSlice = createSlice({
  name: 'bridge',
  initialState,
  reducers: {
    setLocation(state, {payload: data}) {
      state.location = data;
    },
    setLocationEmitter(state, {payload: data}) {
      state.locationEmitter = data;
    },
    setLocationStatus(state, {payload: data}) {
      state.locationStatus = data;
    },

    async stopLoopLocation(state, {payload: data}) {
      state.location.stopLocation();
      // 请求API保存数据到数据库
      state.updataLocationsMap(state.locationsMap);
      state.locationsMap = {
        orderDriverId: '',
        startServiceTimestamp: '',
        orderId: '', // 订单号
        locations: [], // 位置集合
      };
      state.canchLocations = [];
      if (state.listrner) {
        state.listrner.remove();
        state.listrner = null;
      }

      await DeviceStorage.delete('locationMap');
    },
    startLoopLocation(state, {payload: data}) {
      state.location.requestRepeatLocation();
    },

    async removeListenerLocation(state, {payload: data}) {
      state.locationsMap = {
        orderDriverId: '',
        startServiceTimestamp: '',
        orderId: '', // 订单号
        locations: [], // 位置集合
      };
      state.canchLocations = [];
      if (state.listrner) {
        state.listrner.remove();
        state.listrner = null;
      }
      // console.log('removeListenerLocation-success:');
    },

    async addListenerLocation(state, {payload: params}) {
      const {orderId, orderDriverId, startServiceTimestamp}: any = params;
      //   await removeListenerLocation();

      state.locationsMap = {
        orderDriverId: '',
        startServiceTimestamp: '',
        orderId: '', // 订单号
        locations: [], // 位置集合
      };
      state.canchLocations = [];
      if (state.listrner) {
        state.listrner.remove();
        state.listrner = null;
      }

      const userInfo = await DeviceStorage.get('userInfo');
      const canchLocationMap = await DeviceStorage.get('locationMap');
      // console.log('canche----_canchLocationMap', canchLocationMap)
      // console.log('canche----',orderId, canchLocationMap?.orderId)
      // console.log('canche----userInfo', userInfo)
      state.locationsMap.orderDriverId = orderDriverId;
      state.locationsMap.startServiceTimestamp = startServiceTimestamp;
      state.locationsMap.orderId = orderId;
      if (canchLocationMap?.orderId === orderId) {
        state.canchLocations = canchLocationMap.locations;
        state.locationsMap.locations = canchLocationMap.locations;
      }
      console.log('addListenerLocation-step:', orderId, params);
      // 监听位置变化
      state.listrner = state.locationEmitter.addListener(
        'DMLocationEmitter',
        async (result: any) => {
          // console.log("监听位置变化--",result);
          if (result.name === 'locationChange') {
            const error = result.result[0];
            const location = result.result[1];
            // console.log('addListenerLocation-location:', location);
            if (error) {
              console.error('addListenerLocation-error', error);
            } else {
              // if(orderId === state.locationsMap.orderId){
              if (state.canchLocations.length >= 10) {
                const _locationMap = await DeviceStorage.get('locationMap');
                // console.log('_newMap----_locationMap', _locationMap)
                const _locations = !_locationMap ? [] : _locationMap?.locations;

                let _newMap = {
                  orderId: state.locationsMap.orderId,
                  locations: [..._locations, ...state.canchLocations],
                };
                // console.log('_newMap----', _newMap)
                await DeviceStorage.set('locationMap', _newMap);
                state.canchLocations = [];
              }

              if (state.locationsMap.locations.length >= 50) {
                // 请求API保存数据到数据库
                updateLocationsMap(state, state.locationsMap);
                state.canchLocations = [];
                state.locationsMap.locations = [];
                await DeviceStorage.set('locationMap', '');
              }

              state.canchLocations = [...state.canchLocations, location];
              state.locationsMap.locations = [
                ...state.locationsMap.locations,
                location,
              ];
              // console.log('data---1', location)
              // console.log('data---2', state.locationsMap.locations)
              // }else{
              //     console.error('addListenerLocation orderId 不一致', orderId, state.locationsMap.orderId)
              // }
            }
          }
        },
      );
    },
  },
});
export default BaseInfoSlice.reducer;
