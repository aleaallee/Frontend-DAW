import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Fabricantes } from '@models/fabricantes';
import { Observable } from 'rxjs';
import { endpoint } from '@models/database';

@Injectable({
  providedIn: 'root',
})
export class FabricantesService {
  fabricantes: any;
  endpoint: any = endpoint;

  constructor(private httpClient: HttpClient) {}

  getFabricantes(): Observable<Fabricantes> {
    return this.httpClient.get<Fabricantes>(this.endpoint + '/fabricantes');
  }
}
