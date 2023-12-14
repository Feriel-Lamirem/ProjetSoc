import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class UserCommentsService {
  constructor(private http: HttpClient) { }

  // Méthode pour récupérer les commentaires depuis le backend
  getComments(): Observable<any[]> {
    return this.http.get<any[]>('http://localhost:3000/api/comments');
    // Remplace avec ton endpoint réel pour récupérer les commentaires
  }

  // Méthode pour ajouter un nouveau commentaire
  addComment(comment: any): Observable<any> {
    return this.http.post<any>('http://localhost:3000/commentaires', comment);
    // Remplace avec ton endpoint réel pour ajouter un commentaire
  }

  // Méthode pour supprimer un commentaire existant
  deleteComment(commentId: string): Observable<any> {
    return this.http.delete<any>(`http://localhost:3000/api/comments/${commentId}`);
    // Remplace avec ton endpoint réel pour supprimer un commentaire
  }
}
