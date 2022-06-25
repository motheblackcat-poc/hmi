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

  initMap(flats: IFlat[]) {
    console.log(flats);

    const popup = `<p>${flats[0].adress}</p><p>${flats[0].description}</p>`;

    const map = L.map('map').setView([46.000, 2.00], 6);

    L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
      maxZoom: 19,
      attribution: '© OpenStreetMap'
    }).addTo(map);

    const marker = L.marker([46.000, 2.00]).addTo(map);
    marker.bindPopup(popup);

    // const circle = L.circle([46.000, 2.00], {
    //   color: 'blue',
    //   fillColor: 'blue',
    //   fillOpacity: 0.5,
    //   radius: 100000
    // }).addTo(map);

    // map.on('click', (e: any) => console.log('clicked on', e));
  }

}
