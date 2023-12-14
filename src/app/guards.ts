
import { Injectable } from '@angular/core';
import { CanActivate, ActivatedRouteSnapshot, RouterStateSnapshot, Router } from '@angular/router';
import { AuthenticationService } from './services/authentication.service';


@Injectable({
  providedIn:'root'
})
export class AuthGuard implements CanActivate {

  constructor(private authService: AuthenticationService, private router: Router) { }

  canActivate(
    next: ActivatedRouteSnapshot,
    state: RouterStateSnapshot): boolean {
    
    if (this.authService.isAuthenticated()) {
      return true; // L'utilisateur est authentifié, permettez l'accès
    } else {
      this.router.navigate(['/login']); // Redirection vers la page de connexion
      return false;
    }
  }
}
