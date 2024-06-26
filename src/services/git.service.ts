import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { environment as env } from 'src/environments/environment';
import { retry } from 'rxjs';


@Injectable({
  providedIn: 'root'
})
export class GitService {

  apiUrl:string = env.BASE_URL;

  constructor( private http: HttpClient) { }
  getRepos(){
   return this.http.get<any>(this.apiUrl).pipe(retry(3));
  }
}
