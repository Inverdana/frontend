import { Component, OnInit } from '@angular/core';
import { ToastController } from '@ionic/angular';

@Component({
  selector: 'app-amigos',
  templateUrl: './amigos.page.html',
  styleUrls: ['./amigos.page.scss'],
})
export class AmigosPage implements OnInit {
  public code: string;
  public shareMessage: string;

  constructor(
    public toastController: ToastController,
    ) { }

  ngOnInit() {
    this.code = 'M4XP0W3R';
  }

  public async copyToClipboard() {
    try {
      await this.showToast('Código copiado al portapapeles: ' + this.code);
    } catch (error) {
      await this.showToast('Esto sólo funciona en una aplicación');
    }
  }

  public async shareCode() {
    this.shareMessage = 'Hola, te invito a crear';
  }

  public async showToast(message: string) {
    const toast = await this.toastController.create({
      message,
      position: 'bottom',
      duration: 2000,
    });
    toast.present();
  }

}
