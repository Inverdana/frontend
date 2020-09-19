import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class EventosService {

  constructor(private http: HttpClient) { }
  getEventos(){
    return this.http.get(environment.api.eventos);
  }

  public inscribirEvento(id: number) {
    let response: any;
    try {
      response = this.http.post(environment.api.eventos + id + '/', '', {
        headers : 
          new HttpHeaders({
            'Content-Type': 'application/json',
            Authorization: '23a8b7ef0b596fedb51548e37ea43c48e29413bf'
          })
        
      });
      console.log(response);
    } catch (error) {
      console.log(error.message);
      
    }
    return response
  }
}
