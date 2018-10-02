import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { ApiService } from './../api.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-cadastro-usuario',
  templateUrl: './cadastro-usuario.component.html',
  styleUrls: ['./cadastro-usuario.component.css']
})
export class CadastroUsuarioComponent implements OnInit {

  registerForm: FormGroup;
  formMessage: string;
  submitted = false;
  registerSuccess = false;

  constructor(private  apiService:  ApiService, private router: Router) { }

  ngOnInit() {
    this.registerForm = new FormGroup({
      name: new FormControl('', Validators.required),
      cpf: new FormControl('', Validators.required),
      email: new FormControl('', [Validators.required, Validators.email]),
      password: new FormControl('', Validators.required)
    });

  }

  registerUser = function(){
    this.submitted = true; 
    if(!this.registerForm.invalid){
      this.register();
    }
  }

  register = function(){
    let user = {
      "name": this.registerForm.controls.name.value,
      "cpf": this.registerForm.controls.cpf.value,
      "email":this.registerForm.controls.email.value,
      "password":this.registerForm.controls.password.value
    }

    this.apiService.createUser(user).subscribe(() => {
      this.registerSuccess = true;
      this.submitted = false;
      setTimeout(() => {
        this.router.navigate(['./login'])
      }, 2000);
    });
  }

}
