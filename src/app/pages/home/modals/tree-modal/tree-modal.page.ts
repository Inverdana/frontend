import { Component, OnInit } from '@angular/core';
import { 
  ModalController, 
  NavParams 
  } from '@ionic/angular';

@Component({
  selector: 'app-tree-modal',
  templateUrl: './tree-modal.page.html',
  styleUrls: ['./tree-modal.page.scss'],
})
export class TreeModalPage implements OnInit {

  modalTitle: string;
  modalDescription: string;
  modalId: number;
  modalIcon: string;
  modalScientificName: string;
  modalCareTips: string;
  modalRegion: string;
  modalWether: string;
  
  constructor(private modalController: ModalController,
    private navParams: NavParams) { }

  ngOnInit() {
    //console.table(this.navParams);
    this.modalId = this.navParams.data.paramID;
    this.modalTitle = this.navParams.data.paramTitle;
    this.modalDescription = this.navParams.data.paramDescription;
    this.modalIcon = this.navParams.data.paramIcon;
    this.modalScientificName = this.navParams.data.paramScientificName;
    this.modalCareTips = this.navParams.data.paramCareTips;
    this.modalRegion = this.navParams.data.paramRegion;
    this.modalWether = this.navParams.data.paramWether;
  }

  async closeModal() {
    const onClosedData: string = "Wrapped Up!";
    await this.modalController.dismiss(onClosedData);
  }

}
