import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';

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

  constructor() { }

  ngOnInit() {
    this.registerForm = new FormGroup({
      name: new FormControl('', Validators.required),
      cpf: new FormControl('', Validators.required),
      email: new FormControl('', Validators.required),
      password: new FormControl('', Validators.required)
    });

  }

  registerUser = function(){
    this.submitted = true; 
    if(this.registerForm.invalid){
      return;
    }

    this.registerSuccess = true;
  }



}
