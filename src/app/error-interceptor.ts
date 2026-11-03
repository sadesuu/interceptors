import { HttpErrorResponse, HttpInterceptorFn } from '@angular/common/http';
import { catchError, throwError } from 'rxjs';

export const errorInterceptor: HttpInterceptorFn = (req, next) => {
  return next(req).pipe(
    catchError((error: HttpErrorResponse)=>{
      console.log("Tipo de error: " + error.status)
      console.log("Mensaje de error: " + error.statusText)
      return throwError (()=> error) 
    })
  );
};
