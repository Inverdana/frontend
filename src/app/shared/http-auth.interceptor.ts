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
import { catchError, map, finalize } from 'rxjs/operators';
import { ToastService } from '../services/toast.service';
import { SpinnerService } from '../services/spinner.service';

@Injectable()
export class HttpAuthInterceptor implements HttpInterceptor {
  constructor(
    private persistenceService: PersistenceService,
    public toastService: ToastService,
    public spinnerService: SpinnerService,
    ) {}

  intercept(request: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {
    if (request.url != environment.api.inicio){
      this.spinnerService.startLoadingSpinner();
      const token = this.persistenceService.get('token');
      request = request.clone({
        setHeaders: {
          Authorization: token ? `Token ${token}` : ''
        }
      });
    }
    return next.handle(request).pipe(
      catchError((error: HttpErrorResponse) => {
        if (error.error instanceof Error) {
          console.error('An error occurred:', error.error.message);
        } else {
          // const token = this.persistenceService.set('token',null)
          console.error(`Backend returned code ${error.status}, body was: ${error.message}`);
        }

        if (error.status === 403) {
          this.toastService.presentToast('No puedes ingresar tu propio código', 'warning');
        }

        if (error.status === 404) {
          this.toastService.presentToast('No se encontró un usuario con el código que ingresaste', 'warning');
        }

        this.spinnerService.stopLoadingSpinner();

        // If you want to return a new response:
        // return of(new HttpResponse({body: [{name: "Default value..."}]}));

        // If you want to return the error on the upper level:
        // return throwError(error);

        // or just return nothing:
        return EMPTY;
      }),
      finalize( () => {

        this.spinnerService.stopLoadingSpinner();
      })

    );

  }
}
