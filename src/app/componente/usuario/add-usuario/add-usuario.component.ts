import { UsuarioService } from './../../../service/usuario.service';
import { Usuario } from './../../../model/Usuario';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-add-usuario',
  templateUrl: './add-usuario.component.html',
  styleUrls: ['./add-usuario.component.css']
})
export class AddUsuarioComponent implements OnInit {

  usuario = new Usuario();

  constructor(
    private routeActive: ActivatedRoute,
    private usuarioService: UsuarioService
  ) { }

  ngOnInit(): void {
    let id = this.routeActive.snapshot.paramMap.get('id');

    if (id != null) {
      this.usuarioService.findById(id).subscribe(data => {
        this.usuario = data;
      })
    }
  }

  salvar() {
    if (this.usuario.id != null && this.usuario.id.toString().trim() != null) {
      this.usuarioService.update(this.usuario).subscribe(data => {
        this.novo();
        console.info("Usuário editado " + data);
      });
    } else {
      this.usuarioService.save(this.usuario).subscribe(data => {
        this.novo();
        console.info("Usuário salvo " + data);
      });
    }
  }

  novo(){
    this.usuario = new Usuario();
  }
}
