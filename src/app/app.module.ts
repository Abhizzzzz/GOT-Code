import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { ViewDetailsComponent } from './view-details/view-details.component';

//router module used for setting up the application level
import {RouterModule,Routes} from '@angular/router';
//importing HttpClient
import {HttpClientModule} from '@angular/common/http';
//for forms
import {FormsModule} from '@angular/forms';
// for loader
import { NgxSpinnerModule } from 'ngx-spinner';
// for back history
import {Location} from '@angular/common';

import { MainHttpService } from './main-http.service';
import { BooksComponent } from './books/books.component';
import { CharactersComponent } from './characters/characters.component';
import { HousesComponent } from './houses/houses.component';
import { NotFoundComponent } from './not-found/not-found.component';
import { SearchNotFoundComponent } from './search-not-found/search-not-found.component';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    ViewDetailsComponent,
    BooksComponent,
    CharactersComponent,
    HousesComponent,
    NotFoundComponent,
    SearchNotFoundComponent
  ],
  imports: [
    BrowserModule,
    RouterModule.forRoot([
      {path:'home',component:HomeComponent},
      // {path:'',component:HomeComponent},
      {path:'',redirectTo:'home',pathMatch:'full'},
      {path:'view-details/:url',component:ViewDetailsComponent},
      {path:'books',component:BooksComponent},
      {path:'characters',component:CharactersComponent},
      {path:'houses',component:HousesComponent},
      {path:'search-not-found',component:SearchNotFoundComponent},
      {path:'**',component:NotFoundComponent}
    ]),
    HttpClientModule,
    FormsModule,
    NgxSpinnerModule
  ],
  providers: [MainHttpService,Location],
  bootstrap: [AppComponent]
})
export class AppModule {}
