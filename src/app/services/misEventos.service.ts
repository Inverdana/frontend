import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class MisEventosService {

  constructor(private http: HttpClient) { }
  getMisEventos(){
    return this.http.get(environment.api.eventos);
  }
}
