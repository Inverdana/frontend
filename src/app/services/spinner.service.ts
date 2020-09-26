import { Component } from '@angular/core';
import { LoadingController } from '@ionic/angular';
import { Injectable } from '@angular/core';


@Injectable({
  providedIn: 'root'
})
export class SpinnerService {
  constructor(public loadingController: LoadingController) {}

  async startLoadingSpinner() {
    const loading = await this.loadingController.create({
      message: 'Cargando',
      duration: 60000
    });
    await loading.present();

    const { role, data } = await loading.onDidDismiss();

    console.log('Loading dismissed!');
  }

  async stopLoadingSpinner() {
      this.loadingController.dismiss();
  }

}