import { LoginComponent } from './login/login.component';
import { AddUsuarioComponent } from './componente/usuario/add-usuario/add-usuario.component';
import { UsuarioComponent } from './componente/usuario/usuario/usuario.component';
import { HomeComponent } from './home/home.component';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { GuardGuard } from './service/guard.guard';

const routes: Routes = [
  { path: '', component: LoginComponent },
  { path: 'login', component: LoginComponent },
  { path: 'home', component: HomeComponent, canActivate: [GuardGuard] },
  { path: 'usuario', component: UsuarioComponent, canActivate: [GuardGuard] },
  { path: 'add-usuario', component: AddUsuarioComponent, canActivate: [GuardGuard] },
  { path: 'add-usuario/:id', component: AddUsuarioComponent, canActivate: [GuardGuard] },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
