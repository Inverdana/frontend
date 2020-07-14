import { Injectable } from '@angular/core';
import {
  HttpInterceptor,
  HttpRequest,
  HttpErrorResponse,
  HttpHandler,
  HttpEvent,
  HttpResponse
} from '@angular/common/http';

import { Observable, EMPTY, throwError, of } from 'rxjs';

import {environment} from 'src/environments/environment';
import { PersistenceService } from '../services/persistence.service';

@Injectable()
export class HttpAuthInterceptor implements HttpInterceptor {
  constructor(private persistenceService: PersistenceService) {}

  intercept(request: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {
    if (request.url!=environment.api.inicio){
    const token = this.persistenceService.get('token')
    request = request.clone({
      setHeaders: {
        Authorization: token? `Token ${token}` : ''
      }
    });
  }
    return next.handle(request)
    
  }
}