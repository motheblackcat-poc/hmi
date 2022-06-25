import { Observable } from 'rxjs';
import { IFlat } from 'src/app/interfaces/flat.interface';
import { FlatService } from 'src/app/services/flat.service';

import { Component, OnInit } from '@angular/core';

declare let L: any

@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.scss']
})
export class SearchComponent implements OnInit {
  flats: Observable<IFlat[]> = new Observable<IFlat[]>;

  constructor(private flatService: FlatService) { }

  ngOnInit(): void {
    this.flats = this.flatService.getFlats();

    this.flats.subscribe(flats => {
      this.initMap(flats);
    });
  }

  async initMap(flats: IFlat[]) {
    const map = L.map('map').setView([46.000, 2.00], 6);

    L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
      maxZoom: 19,
      attribution: '© OpenStreetMap'
    }).addTo(map);

    flats.forEach((flat: IFlat) => {
      const marker = L.marker([flat.y, flat.x]).addTo(map);
      const popup = `<p>${flat.adress}</p><p>${flat.description}</p>`;
      marker.bindPopup(popup);
    })
  }

}
