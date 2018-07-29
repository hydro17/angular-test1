import { $BANG } from '@angular/compiler/src/chars';
import { Component, OnInit } from '@angular/core';
import { Http } from '@angular/http';

@Component({
  // tslint:disable-next-line:component-selector
  selector: 'posts',
  templateUrl: './posts.component.html',
  styleUrls: ['./posts.component.css']
})
export class PostsComponent implements OnInit {
  posts: any[];
  private url = 'https://jsonplaceholder.typicode.com/posts';

  constructor(private http: Http) {
  }

  ngOnInit() {
    this.http.get(this.url)
      .subscribe(response => this.posts = response.json());
  }

  createPost(input: HTMLInputElement) {
    const post = { title: input.value };

    this.http.post(this.url, JSON.stringify(post))
      .subscribe(response => {
        console.log(response.json());

        post['id'] = response.json().id;

        this.posts.splice(0, 0, post);
        input.value = '';
      });
  }

  updatePost(post) {
    // this.http.put(this.url + '/' + post.id, JSON.stringify(post))
    //   .subscribe(response => console.log(response.json()));

    this.http.patch(this.url + '/' + post.id, JSON.stringify({ title: 'aaa' }))
      .subscribe(response => console.log(response.json()));
  }

  deletePost(post) {
    this.http.delete(this.url + '/' + 345)
      .subscribe(
        response => {
          console.log(response.json());
          const index = this.posts.indexOf(post);
          this.posts.splice(index, 1);
        },
        error => {
          console.log(error.json());
        }
      );
  }

}
