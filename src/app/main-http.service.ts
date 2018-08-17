import { Injectable } from '@angular/core';

//importing HttpClient and HttpErrorResponse
import {HttpClient,HttpErrorResponse} from '@angular/common/http';
//importing Observables
import { Observable } from 'rxjs';
import 'rxjs/add/operator/catch';
import 'rxjs/add/operator/do';


@Injectable({
  providedIn: 'root'
})
export class MainHttpService {

  baseUrl = "https://www.anapioficeandfire.com/api";

  constructor(private _http: HttpClient) {
    console.log("Service is created");
   }
  //  all books
   getAllBooks(): any{
     let response = this._http.get(this.baseUrl+'/books');
     return response;
   }
   //all characters
   getAllCharacters(): any{
    let response = this._http.get(this.baseUrl+'/characters');
    return response;
  }
  // all houses
  getAllHouses(): any{
    let response = this._http.get(this.baseUrl+'/houses');
    return response;
  }
  // particular detail
  getAParticularDetail(url): any{
    let response = this._http.get(url);
    return response;
  }
  // house by name
  getHousesByName(name): any{
    let response = this._http.get(this.baseUrl+'/Houses?name='+name);
    return response;
  }
  // book by name
  getBooksByName(name): any{
    let response = this._http.get(this.baseUrl+'/Books?name='+name);
    return response;
  }
  // character by name
  getCharactersByName(name): any{
    let response = this._http.get(this.baseUrl+'/Characters?name='+name);
    return response;
  }
}
