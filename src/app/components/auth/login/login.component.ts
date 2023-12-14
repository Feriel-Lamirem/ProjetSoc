import { Component } from '@angular/core';
import { Router } from '@angular/router'; // Importer le Router
import { AuthenticationService } from './../../../services/authentication.service';



@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent {
  username: string = '';
  password: string = '';

  
  constructor(private authService: AuthenticationService , private router: Router  ) { }

  login() {
    // Appel à la méthode de connexion dans le service d'authentification
    this.authService.login({ email: 'example@example.com', password: 'password' })
      .subscribe(
        (response) => {
          // Gérer la réponse après la connexion réussie
          console.log('Connexion réussie', response);
        },
        (error) => {
          // Gérer les erreurs de connexion
          console.error('Erreur de connexion', error);
        }
      );
  }
  onLoginSubmit(): void {
    // Logique pour la soumission du formulaire de connexion
    console.log('Username:', this.username);
    console.log('Password:', this.password);
    // Ajoutez ici la logique pour envoyer ces données au backend pour l'authentification

    // Exemple : Redirection vers une autre page après la connexion
    this.router.navigate(['/dashboard']); // Remplacez '/dashboard' par le chemin de votre choix
  }

  redirectToSignUp(): void {
    // Redirection vers la page d'inscription (Sign Up)
    this.router.navigate(['/signup']); // Remplacez '/signup' par le chemin de votre page d'inscription
  }
}
