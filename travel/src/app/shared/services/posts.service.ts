import { Injectable } from '@angular/core';
import { PostsModel } from '../models/posts.model';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { SettingsService } from './settings.service';

@Injectable({
  providedIn: 'root'
})
export class PostsService {

  private postsItems! : PostsModel[];
  constructor(private http: HttpClient, private settingService : SettingsService ) { }

  // Get All Posts
  getPosts(name:string): Observable<any>{
    return this.http.get(this.settingService.baseURL + name)
  }

  //Get Posts By Id
  getPost(name:string, id:number): Observable<any>{
    return this.http.get(this.settingService.baseURL + name + "/" + id)
  }

  //Delete Post By id
  deletePost(name:string, id:number): Observable<any>{
    return this.http.delete(this.settingService.baseURL + name + '/' + id)
  }

  //Edit Posts By Id
  editPost(name:string, id:number, data:PostsModel): Observable<any>{
    return this.http.put(this.settingService.baseURL + name + '/' + id, data)
  }


}
