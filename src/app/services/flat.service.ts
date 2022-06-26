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
<<<<<<< HEAD
    this.http.post<IFlat[]>(this.apiUrl, JSON.parse(jsonBody));
=======
    this.http.post<IFlat[]>(this.apiUrl, JSON.stringify(jsonBody));
>>>>>>> 9871c96bd52ffe1c934b52f323975df763d95075
  }
}
