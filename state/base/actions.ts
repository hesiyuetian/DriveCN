import {createAction} from '@reduxjs/toolkit';

export const setLoading = createAction<Boolean>('base/loading');
