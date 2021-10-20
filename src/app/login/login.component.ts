import { LoginServiceService } from './../service/login-service.service';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  usuario = {
    login: '',
    senha: ''
  }

  constructor(
    private loginService: LoginServiceService,
    private router: Router
  ) { }

  ngOnInit(): void {
    if (localStorage.getItem('token') !== null && localStorage.getItem('token').trim() !== null) {
      this.router.navigate(['home']);
    }
  }

  login(){
    this.loginService.login(this.usuario);
  }
}
