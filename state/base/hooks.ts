import {setLoading} from './actions';

import {useSelector} from 'react-redux';
import {useCallback} from 'react';
import {AppState, useAppDispatch} from '../index';

export function useLoading(): [
  boolean,
  {
    showLoading: () => void;
    hideLoading: () => void;
  },
] {
  const dispatch = useAppDispatch();
  const loading = useSelector<AppState, AppState['base']['loading']>(
    (state: AppState) => state.base.loading,
  );

  const showLoading = useCallback(() => {
    dispatch(setLoading(true));
  }, [dispatch]);
  const hideLoading = useCallback(() => {
    dispatch(setLoading(false));
  }, [dispatch]);

  return [loading, {showLoading, hideLoading}];
}
