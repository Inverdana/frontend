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
    this.http.post(environment.api.eventos + id + '/', '').subscribe();
  }
}
