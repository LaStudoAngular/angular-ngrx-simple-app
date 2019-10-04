import { routerReducer } from '@ngrx/router-store';
import { ActionReducerMap } from '@ngrx/store';

import { IAppState } from '../state/app.state';
import { userReducers } from './user.reducers';
import { configReducers } from './config.reducers';

export const appReducers: ActionReducerMap<IAppState, any> = {
  users: userReducers,
  config: configReducers,
  router: routerReducer
}
