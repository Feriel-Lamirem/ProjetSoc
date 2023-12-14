import { Component } from '@angular/core';
import { UserCommentsService } from './../../services/user-comments.service';



interface Comment {
  user: string;
  text: string;
}

@Component({
  selector: 'app-user-comments',
  templateUrl: './user-comments.component.html',
  styleUrls: ['./user-comments.component.scss']
})
export class UserCommentsComponent {

  comments: any[] = [];
  newComment: string = '';

  constructor(private commentService: UserCommentsService) {
    this.loadComments();
  }

  loadComments() {
    this.commentService.getComments().subscribe(
      (data) => {
        this.comments = data;
      },
      (error) => {
        console.error('Erreur lors du chargement des commentaires', error);
      }
    );
  }

  addComment() {
    const newComment = { text: this.newComment /* ... autres données du commentaire ... */ };

  this.commentService.addComment(newComment).subscribe(
    (response) => {
      console.log('Commentaire ajouté avec succès', response);
      this.loadComments(); // Recharger les commentaires après l'ajout
    },
    (error) => {
      console.error('Erreur lors de l\'ajout du commentaire', error);
    }
  );
}

  deleteComment(commentId: string) {
    this.commentService.deleteComment(commentId).subscribe(
      (response) => {
        console.log('Commentaire supprimé avec succès', response);
        this.loadComments(); // Recharger les commentaires après la suppression
      },
      (error) => {
        console.error('Erreur lors de la suppression du commentaire', error);
      }
    );
  }
}