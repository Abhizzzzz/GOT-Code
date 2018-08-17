import { Component, OnInit } from '@angular/core';
import { MainHttpService } from '../main-http.service';

import { ActivatedRoute, Router } from '@angular/router';
import { NgxSpinnerService } from '../../../node_modules/ngx-spinner';

@Component({
  selector: 'app-houses',
  templateUrl: './houses.component.html',
  styleUrls: ['./houses.component.css']
})
export class HousesComponent implements OnInit {
  nameOfTheHouse;
  allHouses;
  constructor(public mainService: MainHttpService, private _route: ActivatedRoute, private router: Router, private spinner: NgxSpinnerService) {
  }

  ngOnInit() {
    // loader
    this.spinner.show();
    setTimeout(() => {
      /** spinner ends after 2 seconds */
      this.spinner.hide();
    }, 2000);
    // all houses
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
  search(): any {
    // loader
    this.spinner.show();
    setTimeout(() => {
      /** spinner ends after 2 seconds */
      this.spinner.hide();
    }, 2000);
    // house by name
    this.allHouses = this.mainService.getHousesByName(this.nameOfTheHouse).subscribe(
      data => {
        this.allHouses = data;
        console.log(this.allHouses);
        if (this.allHouses.length == 0) {
          this.router.navigate(['/search-not-found']);
        }
      },
      error => {
        console.log("Error");
      }
    )
  }
}
