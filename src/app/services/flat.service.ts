import { BehaviorSubject, Observable, of } from 'rxjs';

import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

import { RESPONSES } from '../enums/responses.enum';
import { IFlat } from '../interfaces/flat.interface';
import { mockFlats } from '../mocks/flats.mock';

@Injectable({
  providedIn: 'root'
})
export class FlatService {
  constructor(private http: HttpClient) { }

  getFlats(): BehaviorSubject<IFlat[]> {
    return new BehaviorSubject<IFlat[]>(mockFlats);
  }

  postFlat(): Observable<string> {
    // const provider = new OpenStreetMapProvider();
    // const results: any = await provider.search({ query: '17 rue d\' Ormesson 93800 Epinay sur Seine' });
    // console.log(results[0].lat, results[0].lng);
    return of(RESPONSES.SUCCESS);
  }
}
