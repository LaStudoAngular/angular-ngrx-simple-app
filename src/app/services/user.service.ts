import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { environment } from 'src/environments/environment';
import { Observable } from 'rxjs';
import { IUserHttp } from '../interfaces/user-http';

@Injectable({
  providedIn: 'root'
})
export class UserService {
  private url = `${environment.apiUrl}users.json`;

  constructor(private http: HttpClient) { }

  public getUsers(): Observable<IUserHttp> {
    return this.http.get<IUserHttp>(this.url);
  }
}
