import { LoginServiceService } from './service/login-service.service';
import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'projeto-angular';

  usuario = {
    login: '',
    senha: ''
  }

  constructor(
    private loginService: LoginServiceService
    ){}

  login(){
    this.loginService.login(this.usuario);
  }
}
