import { BehaviorSubject, Observable, of } from 'rxjs';

import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

import { RESPONSES } from '../enums/responses.enum';
import { IFlat } from '../interfaces/flat.interface';
import { mockFlats } from '../mocks/flats.mock';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class FlatService {
  constructor(private http: HttpClient) { }

  getFlats(): Observable<IFlat[]> {
    return this.http.get<IFlat[]>("http://localhost:5296/api/Flats/liste");
  }

  postFlat(jsonBody: JSON): Observable<string> {
    //const jsonBody = JSON.parse(jsonBody);
    //this.http.post<IFlat[]>("http://localhost:5296/api/Flats", jsonBody);
    return of(RESPONSES.SUCCESS);
  }
}
