import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { PersistenceService } from './persistence.service';
import { environment } from 'src/environments/environment';
import { TokenResponseInterface } from '../types/token.response.interface';
import { MeResponseInterface } from '../types/me.response.interface';
import { map } from 'rxjs/operators';
import { Observable } from 'rxjs';
import { MeInterface } from '../types/me.interface';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  constructor(private http:HttpClient, private persistence: PersistenceService) { }
  login(username:string,password:string){
    this.http.post<TokenResponseInterface>(environment.api.inicio,{username,password}).subscribe(response =>{
      this.persistence.set('token',response.auth_token)
    })
  }
  me():Observable<MeInterface>{
    return this.http.get<MeResponseInterface>(environment.api.yo).pipe(map(value=>{
      const me : MeInterface = {
        nombre:value.first_name,
        apellido:value.last_name,
        puntaje:value.puntaje,
      }
      return me;
    } ))
  }
}
