import { Component, OnInit } from '@angular/core';
import { MainHttpService } from '../main-http.service';
// for route
import { ActivatedRoute, Router } from '../../../node_modules/@angular/router';
// for loader
import { NgxSpinnerService } from '../../../node_modules/ngx-spinner';

@Component({
  selector: 'app-books',
  templateUrl: './books.component.html',
  styleUrls: ['./books.component.css']
})
export class BooksComponent implements OnInit {

  allBooks;
  nameOfTheBook
  constructor(public mainService: MainHttpService, private _route: ActivatedRoute, private router: Router, private spinner: NgxSpinnerService) { }

  ngOnInit() {
    // loader
    this.spinner.show();
    setTimeout(() => {
      /** spinner ends after 2 seconds */
      this.spinner.hide();
    }, 2000);
    // all books
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
  }
  // search by name
  search(): any {
    //loader
    this.spinner.show();
    setTimeout(() => {
      /** spinner ends after 2 seconds */
      this.spinner.hide();
    }, 2000);
    // book by name
    this.allBooks = this.mainService.getBooksByName(this.nameOfTheBook).subscribe(
      data => {
        this.allBooks = data;
        console.log(this.allBooks);
        if (this.allBooks.length == 0) {
          this.router.navigate(['/search-not-found']);
        }
      },
      error => {
        console.log("Error");
      }
    )
  }
}
