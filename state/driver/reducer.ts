import {createSlice} from '@reduxjs/toolkit';
import BackgroundTimer from 'react-native-background-timer';
import DeviceStorage from '../../web-app/utils/localStorage';
import service from '../../web-app/utils/serviceApi';

const initialState: any = {
  location: null,
  locationEmitter: null, // 监听

  isLoopDriver: false,
  isReportDriverLocation: false, // 是否需要上报位置
  isHavReportDriverLocationProcss: false, // 是否与已经存在的上报位置进程

  timer: null,
  listrner: null, // 监听
  canchLocations: {}, // 临时缓存  每隔一段时间上传一个
};

const InfoSlice = createSlice({
  name: 'driver',
  initialState,
  reducers: {
    setCategory(state, {payload: category}) {
      state.category = category;
    },

    setLocation(state, {payload: data}) {
      state.location = data;
      // console.log('setLocation====', data);
    },

    setLocationEmitter(state, {payload: data}) {
      state.locationEmitter = data;
      console.log('setLocationEmitter====', data);
    },

    startTask(state) {
      console.log('frist =======');
    //   this.addListenerLocation();
    //   this.loopDriver();

      BackgroundTimer.runBackgroundTimer(async () => {
        const _token = await DeviceStorage.get('token');
        console.log('BackgroundTimer ===', _token);
        if (_token) {
        //   this.loopDriver();
        } else {
        //   this.stopTask();
          BackgroundTimer.stopBackgroundTimer();
          // removeListenerLocation
          state.canchLocations = {};
          if (state.listrner) {
            state.listrner.remove();
            state.listrner = null;
          }
        }
      }, 60000);
    },

    stopTask(state, {payload: data}) {
      BackgroundTimer.stopBackgroundTimer();

      // removeListenerLocation
      state.canchLocations = {};
      if (state.listrner) {
        state.listrner.remove();
        state.listrner = null;
      }
    },

    loopDriver(state, {payload: data}) {
      service
        .uploadDriverLocation()
        .then(res => {
          if (res.code === 200) {
            console.log('loopDriver----result:::', res);
            state.isReportDriverLocation = res.result.result;
            state.timer && clearInterval(state.timer);
            if (res.result.result) {
              const requestSingleLocation = () => {
                service
                  .uploadDriverTrack({
                    track: {
                      // driverCarId: 0,
                      latitude: state.canchLocations.latitude,
                      longitude: state.canchLocations.longitude,
                      speed: state.canchLocations.speed,
                      speedAccuracy: state.canchLocations.speedAccuracy,
                      timestamp: state.canchLocations.timestamp,
                    },
                  })
                  .then(res => {
                    console.log('上报成功----success', res);
                  })
                  .catch(e => {
                    console.log('上报失败----error', e);
                  });
              };
              requestSingleLocation();
              if (state.isReportDriverLocation) {
                state.isHavReportDriverLocationProcss = true;
                state.timer = setInterval(() => {
                  requestSingleLocation();
                }, 10000);
              }
            } else {
              state.isHavReportDriverLocationProcss = false;
            }
          }
        })
        .catch(e => {
          console.log('loopDriver----error', e);
        });
    },

    addListenerLocation(state, {payload: data}) {
      // removeListenerLocation
      state.canchLocations = {};
      if (state.listrner) {
        state.listrner.remove();
        state.listrner = null;
      }

      state.location.requestRepeatLocation();
      console.log('addListenerLocation-step:', state.locationEmitter);
      // 监听位置变化
      state.listrner = state.locationEmitter.addListener(
        'DMLocationEmitter',
        (result: any) => {
          // console.log("监听位置变化--",result);
          if (result.name === 'locationChange') {
            const error = result.result[0];
            const location = result.result[1];
            if (error) {
              console.error('addListenerLocation-error', error);
            } else {
              state.canchLocations = location;
            }
          }
        },
      );
    },
  },
});

export default InfoSlice.reducer;
