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
    });
    return loading.present();
  }

  async stopLoadingSpinner() {
      this.loadingController.dismiss();
  }

}