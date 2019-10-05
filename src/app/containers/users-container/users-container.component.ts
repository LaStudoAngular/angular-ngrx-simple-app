import { Component, OnInit } from '@angular/core';
import { Store, select } from '@ngrx/store';
import { IAppState } from 'src/app/store/state/app.state';
import { Router } from '@angular/router';
import { GetUsers } from 'src/app/store/actions/user.actions';
import { selectUserList } from 'src/app/store/selectors/user.selectors';

@Component({
  selector: 'ngrx-users-container',
  templateUrl: './users-container.component.html',
  styleUrls: ['./users-container.component.scss']
})
export class UsersContainerComponent implements OnInit {

  constructor(
    private store: Store<IAppState>,
    private router: Router
  ) { }

  public users$ = this.store.pipe(select(selectUserList));

  ngOnInit() {
    this.store.dispatch(new GetUsers());
  }

  navigateToUser(id: number): void {
    this.router.navigate(['user', id]);
  }

}
