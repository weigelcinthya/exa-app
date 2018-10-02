import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { ApiService } from './../api.service';
import { Router, ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-feed',
  templateUrl: './feed.component.html',
  styleUrls: ['./feed.component.css']
})
export class FeedComponent implements OnInit {

  formPost: FormGroup
  submitted = false;
  posts = [];
  userId: any;
  urlParams: any;
  user: any;
  userName: string;

  constructor(private apiService: ApiService, private router: Router, private activatedRoute: ActivatedRoute) { 
    this.activatedRoute.params.subscribe( params => {
      this.urlParams = params;
    });
  }

  ngOnInit() {
    this.formPost = new FormGroup({
      text: new FormControl('', Validators.required)
    });

   
    this.getUserById();
    this.getPosts();
  }

  getUserById(){
    this.apiService.getUserById(this.urlParams.id)
      .subscribe((response) => {
        this.user = response;
        this.userName = this.user.name;
      })
  }

  getPosts = function(){
    this.apiService.getPosts().subscribe((response) => {
      this.posts = response;
    });
  }

  createNewPost = function(){
    this.submitted = true;
    if(!this.formPost.invalid){
      let post = {
        "text": this.formPost.controls.text.value,
        "user": {
          "id": this.user.id
        }
      }
      this.apiService.createPost(post).subscribe((response) => {
        this.submitted = false;
        this.getPosts();
        this.clean();
      });
    }
    
  }

  logout = function(){
    this.router.navigate(['./login']);
  }

}
