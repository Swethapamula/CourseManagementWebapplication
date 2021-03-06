import { Injectable } from '@angular/core';
import { HttpInterceptor, HttpRequest ,HttpHandler, HttpEvent} from '@angular/common/http';
import { AuthService } from './auth.service';
import { Observable } from 'rxjs';
@Injectable({
  providedIn: 'root'
})
export class TokenInterceptorService implements HttpInterceptor  {

  constructor( private _auth:AuthService) { }
  intercept(req: HttpRequest<any>, next: HttpHandler):
   Observable<HttpEvent<any>> {
     const token =this._auth.getToken();
     req= req.clone({
      setHeaders: { Authorization: "Bearer " + token}
     })
     return next.handle(req);

  } 
}
