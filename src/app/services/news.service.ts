import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class NewsService {

  constructor(public _http: HttpClient) { }

  getNews() {
    return this._http.get("https://api.npoint.io/96363b7b60639fdd6e7d");
  }
}
