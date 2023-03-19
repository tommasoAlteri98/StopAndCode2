import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { PostsListComponent } from './posts-list/posts-list.component';
import { PostsDetailComponent } from './posts-detail/posts-detail.component';
import { PreferitiComponent } from './preferiti/preferiti.component';
import { GestioneComponent } from './gestione/gestione.component';


@NgModule({
  declarations: [
    AppComponent,
    PostsListComponent,
    PostsDetailComponent,
    PreferitiComponent,
    GestioneComponent,
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
