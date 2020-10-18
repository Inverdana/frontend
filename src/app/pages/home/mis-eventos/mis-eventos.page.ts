import { Component, OnInit } from '@angular/core';
import { MeInterface } from './../../../types/me.interface';
import { AuthService } from './../../../services/auth.service';

@Component({
  selector: 'app-mis-eventos',
  templateUrl: './mis-eventos.page.html',
  styleUrls: ['../eventos/eventos.page.scss'],
})
export class MisEventosPage implements OnInit {

  constructor(
    public authService: AuthService
  ) { }
   
  me: MeInterface;

  ngOnInit() {
    this.authService.me().subscribe(me => {
      this.me=me; 
    });
  }

}
