import { Injectable } from '@angular/core';
import { HttpInterceptor, HttpRequest, HttpHandler, HttpEvent } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable()
export class CustomInterceptor implements HttpInterceptor {

  constructor() { }

  intercept(req: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {
    // Vous pouvez traiter les requêtes ici avant qu'elles ne soient envoyées
    // Par exemple, ajouter des en-têtes, gérer les erreurs, etc.
    return next.handle(req);
  }
}
