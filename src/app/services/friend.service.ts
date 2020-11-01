import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders, HttpErrorResponse } from '@angular/common/http';
import { environment } from 'src/environments/environment';
import { Observable } from 'rxjs';
import { getLocaleFirstDayOfWeek } from '@angular/common';

@Injectable({
  providedIn: 'root'
})
export class FriendService {

  constructor(private http: HttpClient) { }

  public addAmigo(code: string) {
    this.http.post(environment.api.amigos, {uname: code}, {observe: 'response'})
    .subscribe( response => {
        console.log(response);
    }, (error: HttpErrorResponse) => {
        console.log('Oopsies');
    });
  }
}
