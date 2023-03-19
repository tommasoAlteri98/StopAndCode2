import { Component, OnInit, EventEmitter } from '@angular/core';
import { Post } from '../posts';
import { PostsService } from '../posts.service';

@Component({
  selector: 'app-posts-list',
  templateUrl: './posts-list.component.html',
  styleUrls: ['./posts-list.component.css']
})
export class PostsListComponent implements OnInit {
  posts: Post[] = [];

  constructor(private postsService: PostsService) {}
  ngOnInit(): void {
    this.posts = this.postsService.getPosts();
  }
}
