import { Injectable } from '@angular/core';
import { Effect, Actions, ofType } from '@ngrx/effects';
import { EConfigActions, GetConfig, GetConfigSuccess } from '../actions/config.actions';
import { ConfigService } from 'src/app/services/config.service';
import { switchMap } from 'rxjs/operators';
import { IConfig } from '../../interfaces/config';
import { of } from 'rxjs';

@Injectable()
export class ConfigEffects {
  constructor(
    private actions$: Actions,
    private configService: ConfigService
  ) {}

  @Effect() GetConfig$ = this.actions$.pipe(
    ofType<GetConfig>(EConfigActions.GetConfig),
    switchMap(() => this.configService.getConfig()),
    switchMap((config: IConfig) => of(new GetConfigSuccess(config)))
  );
}
