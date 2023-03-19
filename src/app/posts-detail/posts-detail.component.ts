import { Component, Input, OnInit } from '@angular/core';
import { PostsService } from '../posts.service'
import { Post, PostPreferito } from '../posts';
import { PreferitiService } from '../preferiti.service';
@Component({
  selector: 'app-posts-detail',
  templateUrl: './posts-detail.component.html',
  styleUrls: ['./posts-detail.component.css']
})
export class PostsDetailComponent implements OnInit {
  
  @Input()
  post?: Post;

  constructor(
    public postsService: PostsService, 
    public preferitiService: PreferitiService) {}
  
  
  ngOnInit(): void {
    
  }

  postTotali: Post[] = [];

  aggiungi(post: Post){
    let p: PostPreferito = {
      id: post.id,
      title: post.title
    };

    this.preferitiService.aggiungi(post);
  }

  rimuovi(post: PostPreferito){
    this.preferitiService.rimuovi(post);
  }
}
  
