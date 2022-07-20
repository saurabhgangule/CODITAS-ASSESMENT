import { Injectable } from '@angular/core';
import { environment } from '../../environments/environment';
import {
  HttpRequest,
  HttpHandler,
  HttpEvent,
  HttpInterceptor,
  HttpResponse,
  HttpErrorResponse
} from '@angular/common/http';
import { finalize, Observable, tap } from 'rxjs';
import { AlertService } from '../shared-services/alert.service';

@Injectable()
export class AllHttpInterceptor implements HttpInterceptor {

  constructor(private alertService: AlertService) { }

  intercept(request: HttpRequest<unknown>, next: HttpHandler): Observable<HttpEvent<unknown>> {
    let status: string;
    const newRequest = request.clone({
      url: `${environment.apiBaseUrl}/${request.url}`,
      body: request.body ? JSON.stringify(request.body) : null,
      setHeaders: {
        'Content-Type': 'application/json',
      }
    })
    return next.handle(newRequest).pipe(
      tap({
        next: (event) => {
          if (event instanceof HttpResponse) {
            status = request.headers.get('successMsg') ? `${event.status} - ${request.headers.get('successMsg')}` : '';
          }
        },
        error: (currentError) => {
          if (currentError instanceof HttpErrorResponse) {
            status = `${currentError.status} - ${request.headers.get('errorMsg')}`;
          }
        }
      }),
      finalize(() => {
        if (status)
          this.alertService.showAlert(status, 'dismiss', 'center', 'bottom');
      })
    );
  }
}
