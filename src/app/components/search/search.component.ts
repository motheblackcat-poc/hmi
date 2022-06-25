import { Map } from 'leaflet';
import { BehaviorSubject } from 'rxjs';
import { IFlat } from 'src/app/interfaces/flat.interface';
import { mockFlats } from 'src/app/mocks/flats.mock';
import { FlatService } from 'src/app/services/flat.service';

import { Component, OnInit } from '@angular/core';

declare let L: any;
declare let map: Map;

@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.scss']
})
export class SearchComponent implements OnInit {
  search = false;
  flats$: BehaviorSubject<IFlat[]> = new BehaviorSubject<IFlat[]>([]);

  constructor(private flatService: FlatService) { }

  ngOnInit(): void {
    this.flats$ = this.flatService.getFlats();

    this.flats$.subscribe(flats => {
      this.initMap(flats);
    });
  }

  initMap(flats: IFlat[]) {
    map = L.map('map').setView([46.000, 2.00], 6);

    L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
      maxZoom: 19,
      attribution: '© OpenStreetMap'
    }).addTo(map);

    flats.forEach((flat: IFlat) => {
      const marker = L.marker([flat.lng, flat.lat]).addTo(map);
      const popup = `<p>${flat.address}</p><p>${flat.description}`;
      marker.bindPopup(popup);
    });

    // Add marker with form
    // map.on('click', this.adFlat)
  }

  async searchFlat(searchValue: string) {
    if (searchValue) {
      // const provider = new OpenStreetMapProvider();
      // const results: any = await provider.search({ query: searchValue });
      // const latlng = L.latLng(results[0].y, results[0].x);

      // if (results) {
      //   map.setZoomAround(latlng, 15);
      // }


      // this.flats$ = this.flatService.getFlats();
      this.flats$.next(mockFlats.slice(0, 2));

      map.eachLayer((layer: any) => {
        if (layer['_latlng'] != undefined)
          layer.remove();
      });

      mockFlats.slice(0, 2).forEach((flat: IFlat) => {
        const marker = L.marker([flat.lng, flat.lat]).addTo(map);
        const popup = `<p>${flat.address}</p><p>${flat.description}`;
        marker.bindPopup(popup);
      });

      this.search = true;
    }
  }

  addFlat(e: any) {
    const marker = L.marker(e.latlng).addTo(map);
    const popup = `<p>${e.latlng}<p>`;
    marker.bindPopup(popup).openPopup();
  }
}
