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

  constructor(private http: HttpClient, private persistence: PersistenceService, private catalogoInterface: CatalogoResponseInterface) { }

  public getCatalogoArboles(){
    return this.http.get<CatalogoResponseInterface>('http://www.splashbase.co/api/v1/images/latest').pipe(map(value=>{
      const catalogo : CatalogoInterface = {
        id: value.images.id,
        url: value.images.url,
        large_url: value.images.large_url,
        source_id: value.images.source_id
      }
      console.log(value);
      return catalogo;
    } ))
  }
}
