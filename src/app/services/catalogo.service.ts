import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { PersistenceService } from './persistence.service';
import { environment } from 'src/environments/environment';
import { map } from 'rxjs/operators';
import { Observable } from 'rxjs';
import { CatalogoInterface, CatalogoResponseInterface } from '../types/catalogo.interface';

@Injectable({
  providedIn: 'root'
})
export class CatalogoService {

  constructor(private http: HttpClient) { }

  public getCatalogoArboles(){
    return this.http.get(environment.api.catalogo);
  }
}
