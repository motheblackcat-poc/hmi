import { Observable, of } from 'rxjs';

import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

import { RESPONSES } from '../enums/responses.enum';
import { IFlat } from '../interfaces/flat.interface';

@Injectable({
  providedIn: 'root'
})
export class FlatService {
  mockFlats: IFlat[] = [
    {
      id: 0,
      adress: '17 rue d\' Ormesson 93800 Epinay sur Seine',
      easeWheelChair: true,
      easeBlind: true,
      easePartiallyBlind: true,
      easeDeaf: false,
      easeMental: false,
      easeElderlyPeople: false,
      easeAmputee: false,
      easeCare: false,
      description: 'Rampe d\'accès au batiment, ascenseur 4 personnes 200Kg.'
    },
    {
      id: 1,
      adress: '50 Rue Jean Pierre Timbaud La Garenne-Colombes',
      easeWheelChair: false,
      easeBlind: false,
      easePartiallyBlind: false,
      easeDeaf: false,
      easeMental: true,
      easeElderlyPeople: false,
      easeAmputee: false,
      easeCare: false,
      description: 'Quartier calme avec de nombreux espace vert.'
    }
  ];

  constructor(private http: HttpClient) { }

  getFlats(): Observable<any[]> {
    return of(this.mockFlats);
  }

  postFlat(): Observable<string> {
    return of(RESPONSES.SUCCESS);
  }
}
