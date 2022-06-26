import { Observable } from 'rxjs';

import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

import { IFlat } from '../interfaces/flat.interface';

@Injectable({
  providedIn: 'root'
})
export class FlatService {
  apiUrl = 'http://localhost:5296/api/Flats/liste';
  constructor(private http: HttpClient) { }

  getFlats(): Observable<IFlat[]> {
    return this.http.get<IFlat[]>(this.apiUrl);
  }

  postFlat(jsonBody: string) {
    this.http.post<IFlat[]>(this.apiUrl, JSON.parse(jsonBody));
  }
}
