import {setLoading} from './actions';

import {useSelector} from 'react-redux';
import {useCallback} from 'react';
import {AppState, useAppDispatch} from '../index';

export function useLoading(): [boolean, (loading: boolean) => void] {
  const dispatch = useAppDispatch();
  const loading = useSelector<AppState, AppState['base']['loading']>(
    (state: AppState) => state.base.loading,
  );
  const handLoading = useCallback(
    (flag: boolean) => {
      dispatch(setLoading(flag));
    },
    [dispatch],
  );

  return [loading, handLoading];
}
