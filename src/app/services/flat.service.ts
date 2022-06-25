import { Observable, of } from 'rxjs';

import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

import { RESPONSES } from '../enums/responses.enum';
import { mockFlats } from '../mocks/flats.mock';

@Injectable({
  providedIn: 'root'
})
export class FlatService {
  constructor(private http: HttpClient) { }

  getFlats(): Observable<any[]> {
    return of(mockFlats);
  }

  postFlat(): Observable<string> {
    // const provider = new OpenStreetMapProvider();
    // const results: any = await provider.search({ query: '17 rue d\' Ormesson 93800 Epinay sur Seine' });
    // console.log(results[0].x, results[0].y);
    return of(RESPONSES.SUCCESS);
  }
}
