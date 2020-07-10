import { Injectable } from '@angular/core';

@Injectable({
  providedIn:"root"
})
export class PersistenceService {

  constructor() { }

  set(key:string, data:any): void {
    try{
      localStorage.setItem(key,data)
    } catch(e){
      console.error(e)
    }
  }
  get(key:string): any {
    try{
      return localStorage.getItem(key)
    } catch(e){
      console.error(e)
    }
  }
}
