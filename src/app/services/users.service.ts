import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';
import { endpoint } from '@models/database';

@Injectable({
  providedIn: 'root',
})
export class UsersService {
  endpoint: any = endpoint;
  // users: any;
  // user: any;
  constructor(private httpClient: HttpClient) {}

  getUsuarios(): any {
    let users;
    this.httpClient.get<any>(this.endpoint + '/usuario').subscribe({
      next: (data) => {
        users = data;
      },
      error: (error) => {
        users = error;
      },
    });
    return users;
  }

  getUsuario(usuario: string): Observable<any> {
    return this.httpClient
      .get<any>(this.endpoint + '/usuario/' + usuario)
      .pipe(map((data) => data[0]));
  }
}
