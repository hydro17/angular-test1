import { Injectable } from '@angular/core';
import { Http } from '@angular/http';
import { THIS_EXPR } from '../../../node_modules/@angular/compiler/src/output/output_ast';

@Injectable({
  providedIn: 'root'
})
export class PostsService {
  private url = 'https://jsonplaceholder.typicode.com/posts';

  constructor(private http: Http) {
  }

  getPosts() {
    return this.http.get(this.url);
  }

  createPost(newPost) {
    return this.http.post(this.url, JSON.stringify(newPost));
  }

  updatePost(post) {
    return this.http.put(this.url + '/' + post.id, JSON.stringify(post));
  }

  deletePost(id: number) {
    return this.http.delete(this.url + '/' + id);
  }
}
