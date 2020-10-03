import { Component } from '@angular/core';
import { ToastController } from '@ionic/angular';
import { Injectable } from '@angular/core';


@Injectable({
  providedIn: 'root'
})
export class ToastService {

  constructor(public toastController: ToastController) {}

  async presentToast(message: string, type?: string) {
    const toast = await this.toastController.create({
      message,
      color: type,
      duration: 2000,
      position: 'top'
    });
    toast.present();
  }


}