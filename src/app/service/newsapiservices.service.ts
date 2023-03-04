import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http'
import { Observable } from 'rxjs/internal/Observable';

@Injectable({
  providedIn: 'root'
})
export class NewsapiservicesService {

  constructor(private _http:HttpClient) { }
  
  // news api url

  newsApiUrl = " https://newsapi.org/v2/top-headlines?sources=bbc-news&apiKey=e4a488dfed95471b82d1df64b13cfc86"

  // topheading ()

  topHeading():Observable<any>
  {
    return this._http.get(this.newsApiUrl);
  }


}
