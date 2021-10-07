import { AppConstants } from './../app-constants';
import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { error } from '@angular/compiler/src/util';

@Injectable({
  providedIn: 'root'
})
export class LoginServiceService {

  constructor(
    private http: HttpClient
  ) { }

  login(usuario) {
    return this.http.post(AppConstants.baseLogin, JSON.stringify(usuario)).subscribe(data => {
      var token = JSON.parse(JSON.stringify(data)).Authorization.split(' ')[1];
      localStorage.setItem("token", token);
    }, error => {
      console.error("Error ao fazer login");
    });
  }
}
