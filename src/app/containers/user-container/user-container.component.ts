import { Component, OnInit } from '@angular/core';
import { Store, select } from '@ngrx/store';
import { ActivatedRoute } from '@angular/router';

import { IAppState } from '../../store/state/app.state';
import { selectSelectedUser } from '../../store/selectors/user.selectors';
import { GetUser } from '../../store/actions/user.actions';

@Component({
  selector: 'ngrx-user-container',
  templateUrl: './user-container.component.html',
  styleUrls: ['./user-container.component.scss']
})
export class UserContainerComponent implements OnInit {

  constructor(
    private store: Store<IAppState>,
    private route: ActivatedRoute
  ) { }

  public user$ = this.store.pipe(select(selectSelectedUser));

  ngOnInit() {
    this.store.dispatch(new GetUser(this.route.snapshot.params.id))
  }

}
