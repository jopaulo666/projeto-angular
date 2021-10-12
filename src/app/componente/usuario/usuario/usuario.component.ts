import { Usuario } from './../../../model/Usuario';
import { Observable } from 'rxjs';
import { UsuarioService } from './../../../service/usuario.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-usuario',
  templateUrl: './usuario.component.html',
  styleUrls: ['./usuario.component.css']
})
export class UsuarioComponent implements OnInit {

  usuarios: Array<Usuario>;

  constructor(private usuarioService: UsuarioService) { }

  ngOnInit(): void {
    this.usuarioService.list().subscribe(data => {
      this.usuarios = data
    });
  }

}
