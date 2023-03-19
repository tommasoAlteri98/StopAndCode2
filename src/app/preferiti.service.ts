import { Injectable } from '@angular/core';
import { Post, PostPreferito } from './posts';


@Injectable({
  providedIn: 'root'
})

export class PreferitiService {
  posts: PostPreferito[] = [];
  constructor() { }

  aggiungi(post: PostPreferito){
   
    let p = this.posts.find(x => x.id == post.id);
    if (p == undefined) {
      this.posts.push(post);
    }
  }

  rimuovi(post: PostPreferito){
    this.posts.splice(this.posts.indexOf(post))
  }

  svuota(){
    this.posts = [];
  }
}
