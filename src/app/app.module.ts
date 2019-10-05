import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

// MODULES
import { HttpClientModule } from '@angular/common/http';
import { StoreModule } from '@ngrx/store';
import { appReducers } from './store/reducers/app.reducers';
import { EffectsModule } from '@ngrx/effects';
import { UserEffects } from './store/effects/user.effects';
import { ConfigEffects } from './store/effects/config.effects';
import { StoreRouterConnectingModule } from '@ngrx/router-store';
import { environment } from 'src/environments/environment.prod';
import { StoreDevtoolsModule } from '@ngrx/store-devtools';

// COMPONENTS
import { AppComponent } from './app.component';
import { UsersComponent } from './components/users/users.component';
import { UserDetailsComponent } from './components/user-details/user-details.component';
import { UserContainerComponent } from './containers/user-container/user-container.component';
import { UsersContainerComponent } from './containers/users-container/users-container.component';
import { AppRoutingModule } from './app-routing.module';

@NgModule({
  declarations: [
    AppComponent,
    UsersComponent,
    UserDetailsComponent,
    UserContainerComponent,
    UsersContainerComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    StoreModule.forRoot(appReducers),
    EffectsModule.forRoot([UserEffects, ConfigEffects]),
    StoreRouterConnectingModule.forRoot({ stateKey: 'router' }),
    !environment.production ? StoreDevtoolsModule.instrument() : [],
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
