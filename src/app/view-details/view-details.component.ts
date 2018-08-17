import { Component, OnInit } from '@angular/core';

import { ActivatedRoute, Router } from "@angular/router";
import { MainHttpService } from '../main-http.service';

import { Location } from '@angular/common';
import { NgxSpinnerService } from '../../../node_modules/ngx-spinner';

@Component({
  selector: 'app-view-details',
  templateUrl: './view-details.component.html',
  styleUrls: ['./view-details.component.css']
})
export class ViewDetailsComponent implements OnInit {

  detail;
  myUrl;
  flag;
  constructor(private _route: ActivatedRoute, private router: Router, public mainService: MainHttpService, private location: Location, private spinner: NgxSpinnerService) { }

  ngOnInit() {
    // loader
    this.spinner.show();
    setTimeout(() => {
      /** spinner ends after 1 seconds */
      this.spinner.hide();
    }, 1000);
    // url
    this.myUrl = this._route.snapshot.paramMap.get('url');
    console.log(this.myUrl);
    // searching books in the url if found setting the flag as books
    if (this.myUrl.search("books") != -1) {
      this.flag = "books";
      console.log(this.flag);
    }
    // searching characters in the url if found setting the flag as characters
    else if (this.myUrl.search("characters") != -1) {
      this.flag = "characters";
      console.log(this.flag);
    }
    //houses
    else {
      this.flag = "houses";
      console.log(this.flag);
    }
    // details
    this.detail = this.mainService.getAParticularDetail(this.myUrl).subscribe(
      data => {
        this.detail = data;
        console.log(this.detail);
      },
      error => {
        console.log("Error");
        console.log(error.errorMessage);
      }
    );
  }
  // back page
  goBackToPreviousPage(): any {
    this.location.back();
  }
}