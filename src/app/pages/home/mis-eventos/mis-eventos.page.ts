import { Component, OnInit } from '@angular/core';

import { MeInterface } from './../../../types/me.interface';
import { AuthService } from './../../../services/auth.service';

import { MisEventosService } from 'src/app/services/misEventos.service';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-mis-eventos',
  templateUrl: './mis-eventos.page.html',
  styleUrls: ['./mis-eventos.page.scss'],
})
export class MisEventosPage implements OnInit {

  constructor(
    public misEventosService: MisEventosService,
    public authService: AuthService
  ) { }
  
  misEventos: Observable<any>;  
   
  me: MeInterface;

  ngOnInit() {
    //this.misEventos = this.misEventosService.getMisEventos();
    //console.log(me);

    this.authService.me().subscribe(me => {
      this.me=me; 
    });
  }

/*
  public getMisEventos(){

   this.misEventos.subscribe(this.eventos => {
      let alreadySubscribed = this.me.participaciones;
    });
    //return this.me.participaciones;
  }*/
}
