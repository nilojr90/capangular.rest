import { HttpClient } from '@angular/common/http';
import { Quote } from 'src/app/model/Quote.model';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class KanyeRestService {

  url="https://api.kanye.rest/";

  constructor(private http: HttpClient) { }

  execute():Observable<Quote>{
    return this.http.get<Quote>(this.url);

  }
}
