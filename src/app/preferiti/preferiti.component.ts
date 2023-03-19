import { Component } from '@angular/core';
import { PostPreferito } from '../posts';
import { PreferitiService } from '../preferiti.service';

@Component({
  selector: 'app-preferiti',
  templateUrl: './preferiti.component.html',
  styleUrls: ['./preferiti.component.css']
})
export class PreferitiComponent {

  posts: PostPreferito[] = [];
  constructor(public preferitiService: PreferitiService){

  }

  rimuovi(post: PostPreferito){
    this.preferitiService.rimuovi(post)
  }

  svuota(){
    
  }

}
