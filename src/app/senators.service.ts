import { HttpClient, HttpClientModule } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Senators } from './senators';

const urlBase = 'http://localhost:3000';

@Injectable({
  providedIn: 'root',
})
export class SenatorsService {
  constructor(private http: HttpClient) {}

  listSenators() {
    return this.http.get<Senators[]>(`${urlBase}/senadores`);
  }
}
