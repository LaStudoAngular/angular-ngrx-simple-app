import { Component, OnInit } from '@angular/core';
import { Store, select } from '@ngrx/store';
import { IAppState } from './store/state/app.state';
import { GetConfig } from './store/actions/config.actions';
import { selectConfig } from './store/selectors/config.selectors';

@Component({
  selector: 'ngrx-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {

  constructor(
    private store: Store<IAppState>
  ) {}

  public config$ = this.store.pipe(select(selectConfig));

  ngOnInit(): void {
    this.store.dispatch(new GetConfig());
  }
}
