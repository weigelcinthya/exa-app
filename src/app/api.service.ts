import { Injectable } from '@angular/core';
import { HttpClient} from  '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class ApiService {

  API_URL = "https://testeexa.herokuapp.com";
  constructor(private  httpClient:  HttpClient) { }

  createUser(user){
    return this.httpClient.post(this.API_URL + "/rest/user", user);
  }

  createPost(post){
    return this.httpClient.post(this.API_URL + "/rest/post", post);
  }

  getUsers(){
    return this.httpClient.get(this.API_URL + "/rest/user");
  }

  getPosts(){
    return this.httpClient.get(this.API_URL + "/rest/post");
  }

  getPostsById(id){
    return this.httpClient.get(this.API_URL + "/rest/post/" + id);
  }

  getUserById(id){
    return this.httpClient.get(this.API_URL + "/rest/user/" + id);
  }
}
