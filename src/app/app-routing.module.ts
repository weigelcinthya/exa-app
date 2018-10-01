import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';
import { LoginComponent } from './login/login.component';
import { FeedComponent } from './feed/feed.component';
import { CadastroUsuarioComponent } from './cadastro-usuario/cadastro-usuario.component';

const routes = [
  {'path': 'login', component: LoginComponent}, 
  {'path': 'cadastro-usuario', component: CadastroUsuarioComponent}, 
  {'path': 'feed/:id', component: FeedComponent}, 
]

@NgModule({
  imports: [ CommonModule, RouterModule.forRoot(routes) ],
  exports: [ RouterModule ],
})
export class AppRoutingModule {   
}