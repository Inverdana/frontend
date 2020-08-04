import { Component, OnInit } from '@angular/core';
import { EventosService } from 'src/app/services/eventos.service';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-eventos',
  templateUrl: './eventos.page.html',
  styleUrls: ['./eventos.page.scss'],
})
export class EventosPage implements OnInit {

  constructor(private eventosService:EventosService) { }
  eventos:Observable<any>
  ngOnInit() {
    this.eventos=this.eventosService.getEventos();
  }

}
