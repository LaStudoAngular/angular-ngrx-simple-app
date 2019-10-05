import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { IConfig } from '../interfaces/config';

@Injectable({
  providedIn: 'root'
})
export class ConfigService {
  private url = `${environment.apiUrl}config.json`;

  constructor(private http: HttpClient) { }

  public getConfig(): Observable<IConfig> {
    return this.http.get<IConfig>(this.url);
  }
}
