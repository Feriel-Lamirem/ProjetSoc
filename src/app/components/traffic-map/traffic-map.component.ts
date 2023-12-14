import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { TrafficDataService } from './../../services/traffic-data.service';

declare const google: any;

@Component({
  selector: 'app-traffic-map',
  templateUrl: './traffic-map.component.html',
  styleUrls: ['./traffic-map.component.scss']
})
export class TrafficMapComponent implements OnInit {
  origin: string = '';
  destination: string = '';

  constructor(private trafficDataService: TrafficDataService, private router: Router) { }

  ngOnInit(): void {}

  searchTrafficDetails() {
    this.trafficDataService.searchTrafficDetails(this.origin, this.destination)
      .subscribe(
        (data) => {
          this.trafficDataService.setTrafficDetails(data.SearchInfoTraficByLocationResponse.infoTrafic);
          this.trafficDataService.getAccidents(this.destination)
            .subscribe(
              (accidents) => {
                this.trafficDataService.setAccidentDetails(accidents);
                this.router.navigate(['/traffic-details']);
              },
              (error) => {
                // Gérer les erreurs des accidents
              }
            );
        },
        (error) => {
          // Gérer les erreurs des détails de trafic
        }
      );
  }
}
