import { SpinnerService } from './../../../services/spinner.service';
import { ToastService } from './../../../services/toast.service';
import { MeInterface } from './../../../types/me.interface';
import { AuthService } from './../../../services/auth.service';
import { Component, OnInit } from '@angular/core';
import { EventosService } from 'src/app/services/eventos.service';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-eventos',
  templateUrl: './eventos.page.html',
  styleUrls: ['./eventos.page.scss'],
})
export class EventosPage implements OnInit {

  constructor(
    public eventosService:EventosService,
    public authService: AuthService,
    public toastService: ToastService,
    public spinnerService: SpinnerService
  ) { }
  eventos:Observable<any>;
  me: MeInterface;


  ngOnInit() {
    this.eventos = this.eventosService.getEventos();

    this.authService.me().subscribe(me => {
      this.me=me; 
    });
  }

  public inscribirEvento(id: number) {    
    this.spinnerService.startLoadingSpinner();
    this.eventos.subscribe(eventos => {      
      let alreadySubscribed = this.me.participaciones.find(participacion => participacion.evento.id === id);
      if (alreadySubscribed) {
        this.toastService.presentToast('Ya estás inscrito a este evento', 'warning');
        this.spinnerService.stopLoadingSpinner();
      } else {
        this.eventosService.inscribirEvento(id);
        this.me.participaciones.push({
          evento: {
            id
          }
        })        
        this.toastService.presentToast('Te has inscrito al evento de manera exitosa', 'success');        this.spinnerService.stopLoadingSpinner();
        this.spinnerService.stopLoadingSpinner();        
      }
    });   
  }
}
