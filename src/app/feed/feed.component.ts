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
  posts: any;
  userId: any;
  urlParams: any;
  user: any;

  constructor(private apiService: ApiService, private router: Router, private activatedRoute: ActivatedRoute) { 
    this.activatedRoute.params.subscribe( params => {
      console.log(params);
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
      })
  }

  getPosts = function(){
    this.apiService.getPosts().subscribe((response) => {
      console.log(response);
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
        this.getPosts();
        this.clean();
      });
    }
    
  }

  clean = function(){
    console.log(this.formPost.controls.text.value)
    this.formPost.controls.text.value = "";
    console.log(this.formPost.controls.text.value)
  }

  logout = function(){
    this.router.navigate(['./login']);
  }

}
