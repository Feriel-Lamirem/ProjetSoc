import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { TrafficDataService } from './../../services/traffic-data.service';
import { Observable , of} from 'rxjs';

@Component({
  selector: 'app-traffic-details',
  templateUrl: './traffic-details.component.html',
  styleUrls: ['./traffic-details.component.scss']
})
export class TrafficDetailsComponent implements OnInit {
  trafficDetails: any[] = [];
  accidentDetails: any[] = [];

  constructor(private trafficDataService: TrafficDataService , private router: Router) { }

  ngOnInit() {
    this.trafficDetails = this.trafficDataService.getTrafficDetails();
    this.accidentDetails = this.trafficDataService.getAccidentDetails();
  }



  goToTrafficMap(): void {
    this.router.navigate(['map']);
  }
}
