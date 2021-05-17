import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Fabricantes } from '@models/fabricantes';
import { Observable } from 'rxjs';
import { endpoint } from '@models/database';

@Injectable({
  providedIn: 'root',
})
export class ComponentesService {
  componentes: any;
  endpoint: any = endpoint;

  constructor(private httpClient: HttpClient) {}

  getComponentes(): Observable<any> {
    return this.httpClient.get<any>(this.endpoint + '/componentes');
  }
}
