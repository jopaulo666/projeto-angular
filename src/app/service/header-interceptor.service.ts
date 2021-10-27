import { HttpErrorResponse, HttpEvent, HttpHandler, HttpInterceptor, HttpRequest, HttpResponse, HTTP_INTERCEPTORS } from '@angular/common/http';
import { Injectable, NgModule } from '@angular/core';
import { Observable, throwError } from 'rxjs';

import { catchError, finalize, tap } from 'rxjs/operators';


@Injectable({
  providedIn: 'root'
})
export class HeaderInterceptorService implements HttpInterceptor {



  intercept(req: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {

    if (localStorage.getItem('token') !== null) {
      const token = 'Bearer ' + localStorage.getItem('token');

      const tokenRequest = req.clone({
        headers: req.headers.set('Authorization', token)
      });
      return next.handle(tokenRequest).pipe(
        tap((event: HttpEvent<any>) => {
          if (event instanceof HttpResponse && (event.status === 200 || event.status === 201)) {
            console.info('Operação realizada com sucesso!');
          }
        })
        , catchError(this.error));
    } else {
      return next.handle(req).pipe(catchError(this.error));
    }
  }

  constructor() { }

  error(error: HttpErrorResponse) {
    let msgErro = 'Erro desconhecido';
    if (error.error instanceof ErrorEvent) {
      console.error(error.error);
      msgErro = 'Error: ' + error.error.error;
    } else {
      msgErro = 'Código: ' + error.error.code + '\nMensagem: ' + error.error.error;
    }
    window.alert(msgErro);
    return throwError(msgErro);
  }
}

@NgModule({
  providers: [{
    provide: HTTP_INTERCEPTORS,
    useClass: HeaderInterceptorService,
    multi: true,
  },
  ],
})

export class HttpInterceptorModule {

}
