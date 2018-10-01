import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { Router } from '@angular/router';


@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  loginForm: FormGroup
  submitted = false;

  constructor(private router: Router) { }

  ngOnInit() {
    this.loginForm = new FormGroup({
      email: new FormControl('', [Validators.required, Validators.email]), 
      password: new FormControl('', Validators.required)
    });

  }

  login = function(){
    this.submitted = true;
    if(this.loginForm.invalid){
      return;
    }
    this.router.navigate(['./feed'])
  }

  register = function(){
    this.router.navigate(['./cadastro-usuario']);
  }

}
