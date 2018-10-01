import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { MatInputModule, MatCheckboxModule, MatFormFieldModule, MatCardModule, MatButtonModule} from '@angular/material';
import { AppComponent } from './app.component';
import { AppRoutingModule } from './app-routing.module';
import { LoginComponent } from './login/login.component';
import { CadastroUsuarioComponent } from './cadastro-usuario/cadastro-usuario.component';
import { FeedComponent } from './feed/feed.component';

const appRoutes: Routes = [
  { path: 'login', component: LoginComponent },
  { path: 'cadastro-usuario', component: CadastroUsuarioComponent },
  { path: 'feed', component: FeedComponent },
  {
    path: 'login',
    component: LoginComponent,
    data: { title: 'Login' }
  },
  { path: '',
    redirectTo: '/login',
    pathMatch: 'full'
  },
  { path: '**', component: LoginComponent }
];

const ANGULAR_MATERIAL = [
  BrowserAnimationsModule, 
  MatInputModule, 
  MatCheckboxModule,
  MatFormFieldModule, 
  MatCardModule,
  MatButtonModule
]

const ANGULAR_MODULES = [
  BrowserModule, 
  AppRoutingModule, 
  ReactiveFormsModule, 
  FormsModule, 
  HttpClientModule
]


@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    CadastroUsuarioComponent,
    FeedComponent
  ],
  imports: [
    ANGULAR_MODULES, ANGULAR_MATERIAL, RouterModule.forRoot(
      appRoutes,
      { enableTracing: true } 
    )
  ],
  exports: [ANGULAR_MATERIAL],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }