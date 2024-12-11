import {createSlice} from '@reduxjs/toolkit';
import DeviceStorage from '../../web-app/utils/localStorage';

const initialState = {
  loading: false,
} as any;

const BaseInfoSlice = createSlice({
  name: 'base',
  initialState,
  reducers: {
    setLoading(state, {payload: data}) {
      state.loading = data;
    },
  },
});
export default BaseInfoSlice.reducer;
