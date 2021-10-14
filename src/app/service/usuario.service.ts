import { AppConstants } from './../app-constants';
import { Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class UsuarioService {

  constructor(private http: HttpClient) { }

  list(): Observable<any> {
    return this.http.get<any>(AppConstants.baseUrl);
  }

  delete(id: Number): Observable<any> {
    return this.http.delete(AppConstants.baseUrl + id, {responseType: 'text'});
  }
}
