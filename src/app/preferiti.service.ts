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

  rimuovi(p: PostPreferito){
      let i = this.posts.indexOf(p);
  
      if(i > -1){
        this.posts.splice(i, 1);
      }
    }
  

  svuota(){
    this.posts = [];
  }
}
