import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class GitService {

  apiUrl:string = "https://api.github.com/users/ed-knowah/repos"

  constructor( private http: HttpClient) { }
  getRepos(){
   return this.http.get<any>(this.apiUrl);
  }
}
