import { Component, OnInit } from '@angular/core';
import { MainHttpService } from '../main-http.service';
// for loader
import { NgxSpinnerService } from 'ngx-spinner';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  allBooks;
  allCharacters;
  allHouses;

  constructor(public mainService: MainHttpService, private spinner: NgxSpinnerService) { }

  ngOnInit() {
    // loader
    this.spinner.show();
    setTimeout(() => {
      /** spinner ends after 3 seconds */
      this.spinner.hide();
    }, 3000);
    // getting all books
    this.allBooks = this.mainService.getAllBooks().subscribe(
      data => {
        this.allBooks = data;
        // sorting books by name
        this.allBooks.sort((a, b) => a.name.localeCompare(b.name));
        console.log("All Books");
        console.log(this.allBooks);
      },
      error => {
        console.log("Error");
        console.log(error.errorMessage);
      }
    );
    // getting all characters
    this.allCharacters = this.mainService.getAllCharacters().subscribe(
      data => {
        this.allCharacters = data;
        // sorting characters by name
        this.allCharacters.sort((a, b) => a.name.localeCompare(b.name));
        console.log("All Characters");
        console.log(this.allCharacters);
      },
      error => {
        console.log("Error");
        console.log(error.errorMessage);
      }
    );
    // getting all houses
    this.allHouses = this.mainService.getAllHouses().subscribe(
      data => {
        this.allHouses = data;
        // sorting houses by name
        this.allHouses.sort((a, b) => a.name.localeCompare(b.name));
        console.log("All Houses");
        console.log(this.allHouses);
      },
      error => {
        console.log("Error");
        console.log(error.errorMessage);
      }
    );
  }

}
