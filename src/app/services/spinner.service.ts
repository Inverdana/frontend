import { Component } from '@angular/core';
import { LoadingController } from '@ionic/angular';
import { Injectable } from '@angular/core';


@Injectable({
  providedIn: 'root'
})
export class SpinnerService {

  private isLoading = false;

  constructor(public loadingController: LoadingController) {}

  async startLoadingSpinner() {
    this.isLoading = true;
    return await this.loadingController.create({
      message: 'Cargando',
    }).then( a => {
      a.present().then( () => {
        if (!this.isLoading) {
          a.dismiss();
        }
      });
    });
  }

  async stopLoadingSpinner() {
    return await this.loadingController.dismiss();
  }

}