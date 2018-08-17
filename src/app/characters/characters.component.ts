import { Component, OnInit } from '@angular/core';
import { MainHttpService } from '../main-http.service';
import { ActivatedRoute, Router } from '../../../node_modules/@angular/router';
import { NgxSpinnerService } from '../../../node_modules/ngx-spinner';

@Component({
  selector: 'app-characters',
  templateUrl: './characters.component.html',
  styleUrls: ['./characters.component.css']
})
export class CharactersComponent implements OnInit {
  allCharacters;
  nameOfTheCharacter
  constructor(public mainService: MainHttpService, private _route: ActivatedRoute, private router: Router, private spinner: NgxSpinnerService) { }

  ngOnInit() {
    // loader
    this.spinner.show();
    setTimeout(() => {
      /** spinner ends after 2 seconds */
      this.spinner.hide();
    }, 2000);
    // all characters
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
  }
  search(): any {
    // loader
    this.spinner.show();
    setTimeout(() => {
      /** spinner ends after 2 seconds */
      this.spinner.hide();
    }, 2000);
    // character by name
    this.allCharacters = this.mainService.getCharactersByName(this.nameOfTheCharacter).subscribe(
      data => {
        this.allCharacters = data;
        console.log(this.allCharacters);
        if (this.allCharacters.length == 0) {
          this.router.navigate(['/search-not-found']);
        }
      },
      error => {
        console.log("Error");
      }
    )
  }

}
