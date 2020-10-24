import { Component, OnInit } from '@angular/core';
import { AuthService } from 'src/app/services/auth.service';
import { SpinnerService } from 'src/app/services/spinner.service';
import { ToastService } from 'src/app/services/toast.service';
import { MeInterface } from 'src/app/types/me.interface';

@Component({
  selector: 'app-amigos',
  templateUrl: './amigos.page.html',
  styleUrls: ['./amigos.page.scss'],
})
export class AmigosPage implements OnInit {

  public code: string;
  public shareMessage: string;
  me: MeInterface;

  constructor(
    public authService: AuthService,
    public toastService: ToastService,
    public spinnerService: SpinnerService
  ) { }

  ngOnInit() {
    this.spinnerService.startLoadingSpinner();
    this.authService.me().subscribe(me => {
      
      this.code = me.username;
      this.spinnerService.stopLoadingSpinner();
    })
    
    
  }

}
