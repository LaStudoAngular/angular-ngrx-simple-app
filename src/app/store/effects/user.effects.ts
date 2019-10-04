import { Injectable } from '@angular/core';
import { Actions, Effect, ofType } from '@ngrx/effects';
import { Store } from '@ngrx/store';
import { IAppState } from '../state/app.state';
import { EUserActions } from '../actions/user.actions';

@Injectable()
export class UserEffects {
  constructor(private actions$: Actions, private store: Store<IAppState>) {}

  @Effect()
  getUser$ = this.actions$.pipe(
    ofType(EUserActions.GetUser)
  );

  @Effect()
  getUsers$ = this.actions$.pipe(
    ofType(EUserActions.GetUsers)
  );

}
