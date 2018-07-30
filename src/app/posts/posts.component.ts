import { $BANG } from '@angular/compiler/src/chars';
import { Component, OnInit } from '@angular/core';
import { Http } from '@angular/http';
import { PostsService } from '../services/posts.service';

@Component({
  // tslint:disable-next-line:component-selector
  selector: 'posts',
  templateUrl: './posts.component.html',
  styleUrls: ['./posts.component.css']
})
export class PostsComponent implements OnInit {
  posts: any[];

  constructor(private postsService: PostsService) {
  }

  ngOnInit() {
    this.postsService.getPosts()
      .subscribe(response => this.posts = response.json());
  }

  createPost(input: HTMLInputElement) {
    const newPost = { title: input.value };

    this.postsService.createPost(newPost)
      .subscribe(response => {
        console.log(response.json());

        newPost['id'] = response.json().id;

        this.posts.splice(0, 0, newPost);
        input.value = '';
      });
  }

  updatePost(post) {
    this.postsService.updatePost(post)
      .subscribe(
        response => console.log(response.json()),
        error => {
          if (error.status === 404) {
            console.log('404');
          }
        }
      );

    // this.http.patch(this.url + '/' + post.id, JSON.stringify({ title: 'aaa' }))
    //   .subscribe(response => console.log(response.json()));
  }

  deletePost(post) {
    this.postsService.deletePost(post.id)
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
