import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, FormsModule } from '@angular/forms';
import { IFlat } from 'src/app/interfaces/flat.interface';

declare let L: any;

@Component({
  selector: 'app-publish',
  templateUrl: './publish.component.html',
  styleUrls: ['./publish.component.scss']
})
export class PublishComponent implements OnInit {

  constructor(private fb:FormBuilder) {  }
  form: FormGroup = new FormGroup({});

  ngOnInit(): void {
    this.form = this.fb.group(
      {
        address: '17 rue d\' Ormesson Epinay sur Seine',
        lat: 2.3079464,
        lng: 48.9610279,
        easeWheelChair: true,
        easeBlind: true,
        easePartiallyBlind: true,
        easeDeaf: false,
        easeMental: false,
        easeElderlyPeople: false,
        easeAmputee: false,
        easeCare: false,
        easeDoctor: false,
        easeMarket: false,
        description: 'Rampe d\'accès au batiment, ascenseur 4 personnes 200Kg.',
        email: 'aze@aze.fr'
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

}
