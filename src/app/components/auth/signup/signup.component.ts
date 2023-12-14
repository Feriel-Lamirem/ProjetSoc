import { Component } from '@angular/core';
import { Router } from '@angular/router'; // Importer le Router
import { AuthenticationService } from './../../../services/authentication.service';

@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.scss']
})
export class SignupComponent {
  username: string = '';
  email: string = '';
  password: string = '';

  constructor(private router: Router , private authService: AuthenticationService) { }
   


  signup() {
    // Appel à la méthode d'inscription dans le service d'authentification
    this.authService.signup({ email: 'new@example.com', password: 'password', /* ... autres données d'utilisateur ... */ })
      .subscribe(
        (response) => {
          // Gérer la réponse après l'inscription réussie
          console.log('Inscription réussie', response);
        },
        (error) => {
          // Gérer les erreurs d'inscription
          console.error('Erreur d\'inscription', error);
        }
      );
  }

  onSignupSubmit(): void {
    // Logique pour la soumission du formulaire d'inscription
    console.log('Username:', this.username);
    console.log('Email:', this.email);
    console.log('Password:', this.password);
    // Ajoutez ici la logique pour envoyer ces données au backend pour l'inscription

    // Exemple : Redirection vers une autre page après l'inscription
    this.router.navigate(['/dashboard']); // Remplacez '/dashboard' par le chemin de votre choix
  }

  redirectToSignIn(): void {
    // Redirection vers la page de connexion (Sign In)
    this.router.navigate(['/signin']); // Remplacez '/signin' par le chemin de votre page de connexion
  }
}
