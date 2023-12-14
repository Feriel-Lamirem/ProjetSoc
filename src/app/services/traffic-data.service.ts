import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class TrafficDataService {
  private trafficDetails: any[] = [];
  private accidentDetails: any[] = [];

  constructor(private http: HttpClient) { }

  searchTrafficDetails(origin: string, destination: string) {
    const endpoint = `http://localhost:8000/soap-endpoint/searchInfoTraficByLocation/${origin}/${destination}`;
    return this.http.post<any>(endpoint, {});
  }

  getAccidents(location: string) {
    const endpoint = `http://localhost:8000/accidents/location/${location}`;
    return this.http.get<any[]>(endpoint);
  }

  setTrafficDetails(details: any[]) {
    this.trafficDetails = details;
  }

  setAccidentDetails(accidents: any[]) {
    this.accidentDetails = accidents;
  }

  getTrafficDetails(): any[] {
    return this.trafficDetails;
  }

  getAccidentDetails(): any[] {
    return this.accidentDetails;
  }
}
