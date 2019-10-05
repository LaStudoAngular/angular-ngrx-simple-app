import { Injectable } from '@angular/core';
import { Actions, Effect, ofType } from '@ngrx/effects';
import { Store, select } from '@ngrx/store';
import { IAppState } from '../state/app.state';
import { EUserActions, GetUser, GetUsersSuccess, GetUserSuccess } from '../actions/user.actions';
import { map, switchMap, withLatestFrom } from 'rxjs/operators';
import { of } from 'rxjs';
import { UserService } from '../../services/user.service';
import { IUserHttp } from '../../interfaces/user-http';
import { selectUserList } from '../selectors/user.selectors';

@Injectable()
export class UserEffects {
  constructor(
    private actions$: Actions,
    private store: Store<IAppState>,
    private userService: UserService
  ) {}

  @Effect()
  getUser$ = this.actions$.pipe(
    ofType<GetUser>(EUserActions.GetUser),
    map(action => action.payload),
    withLatestFrom(this.store.pipe(select(selectUserList))),
    switchMap(([id, users]) => {
      const selectedUser = users.filter(user => user.id === +id)[0];
      return of(new GetUserSuccess(selectedUser));
    })
  );

  @Effect()
  getUsers$ = this.actions$.pipe(
    ofType(EUserActions.GetUsers),
    switchMap(() => this.userService.getUsers()),
    switchMap((userHttp: IUserHttp) => of(new GetUsersSuccess(userHttp.users)))
  );

}
