import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { ApiService } from './../api.service';


@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  loginForm: FormGroup
  submitted = false;
  userNotFound = false;

  constructor(private router: Router, private apiService: ApiService) {
    
  }

  ngOnInit() {
    this.loginForm = new FormGroup({
      email: new FormControl('', [Validators.required, Validators.email]), 
      password: new FormControl('', Validators.required)
    });

  }

  login = function(){
    this.submitted = true;
    if(!this.loginForm.invalid){
      this.apiService.getUsers().subscribe((response) => {
        let users = response;
        users.forEach(user => {
          if(user.email == this.loginForm.controls.email.value){
            this.router.navigate(['./feed/' + user.id])
          } else {
            this.userNotFound = true;
          }
        })
      });
    }
  }

  register = function(){
    this.router.navigate(['./cadastro-usuario']);
  }

}
