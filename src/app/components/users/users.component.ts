import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { IUser } from 'src/app/interfaces/user';

@Component({
  selector: 'ngrx-users',
  templateUrl: './users.component.html',
  styleUrls: ['./users.component.scss']
})
export class UsersComponent implements OnInit {
  @Input() users: IUser[];
  @Output() selectedUser: EventEmitter<number> = new EventEmitter();
  constructor() { }
  navigateToUser(id: number): void {
    this.selectedUser.emit(id);
  }
  ngOnInit() {}

}
