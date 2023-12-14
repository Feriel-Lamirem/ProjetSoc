// authentication.service.ts
import { environment } from 'src/environments/environment';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Router } from '@angular/router';
const AUTH_API = ' ';

@Injectable({
  providedIn: 'root'
})


export class AuthenticationService {
  private isAuthenticatedValue: boolean = false;
  constructor(private http: HttpClient) { }
  
  isAuthenticated(): boolean {
    return this.isAuthenticatedValue;
    // Retourne true si l'utilisateur est authentifié, false sinon
  }

  // Exemple de méthode pour la connexion (login)
  login(credentials: any): Observable<any> {
    return this.http.post<any>('http://localhost:3000/api/login', credentials);
    // Remplace avec ton endpoint réel pour la connexion
  }

  // Exemple de méthode pour l'inscription (signup)
  signup(userData: any): Observable<any> {
    return this.http.post<any>('http://localhost:3000/api/signup', userData);
    // Remplace avec ton endpoint réel pour l'inscription
  }
}