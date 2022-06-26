

import { OpenStreetMapProvider } from 'leaflet-geosearch';
import { FlatService } from 'src/app/services/flat.service';

import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';

declare let L: any;

@Component({
  selector: 'app-publish',
  templateUrl: './publish.component.html',
  styleUrls: ['./publish.component.scss']
})
export class PublishComponent implements OnInit {

  constructor(private fb: FormBuilder, private flatService: FlatService) { }
  form: FormGroup = new FormGroup({});

  ngOnInit(): void {
    this.form = this.fb.group(
      {
        address: '',
        lat: 0,
        lng: 0,
        easeWheelChair: false,
        easeBlind: false,
        easePartiallyBlind: false,
        easeDeaf: false,
        easeMental: false,
        easeElderlyPeople: false,
        easeAmputee: false,
        easeCare: false,
        easeDoctor: false,
        easeMarket: false,
        description: '',
        email: '',
        url: ''
      })

    this.initMap();
  }

  initMap() {
    const map = L.map('map').setView([46.000, 2.00], 6);

    L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
      maxZoom: 19,
      attribution: '© OpenStreetMap'
    }).addTo(map);
  }

  async submitForm() {
    const address = this.form.get('address')?.value;
    const provider = new OpenStreetMapProvider();
    const results: any = await provider.search({ query: address });
<<<<<<< HEAD
    const updatedForm = { ...this.form.value, lat: results[0].y, lng: results[0].x };
=======
    const updatedForm = { ...this.form.value, lat: address.x, lng: address.y };
>>>>>>> 9871c96bd52ffe1c934b52f323975df763d95075
    console.log(updatedForm);
    this.flatService.postFlat(updatedForm);
  }
}
