import { Component, OnInit } from '@angular/core';
import { CatalogoService } from 'src/app/services/catalogo.service';
import { Observable } from 'rxjs';
import { ModalController } from '@ionic/angular';
import { TreeModalPage } from '../modals/tree-modal/tree-modal.page';

@Component({
  selector: 'app-catalogo',
  templateUrl: './catalogo.page.html',
  styleUrls: ['./catalogo.page.scss'],
})
export class CatalogoPage implements OnInit {

  dataReturned: any;

  constructor(private catalogoService: CatalogoService, public modalController: ModalController) { }
  catalogo:Observable<any>;
  ngOnInit() {
    this.catalogo=this.catalogoService.getCatalogoArboles();
  }
  async openModal($arbol: any){  //Will be renamed as openModal()
    //console.log("do Something pressed!!!");
    //console.log($arbol);

    const modal = await this.modalController.create({
      component: TreeModalPage,
      componentProps: {
        "paramID": $arbol.id,
        "paramTitle": $arbol.nombre,
        "paramDescription": $arbol.descripcion,
        "paramIcon": $arbol.icono,
        "paramScientificName": "Arbor Viridis",
        "paramCareTips": "Máximo 4 horas de sol diarias y regar con 8 litros de agua al amanecer",
        "paramRegion": "Altiplano central",
        "paramWether": "Semiárido"
      }
    });

    modal.onDidDismiss().then((dataReturned) => {
      if (dataReturned !== null) {
        this.dataReturned = dataReturned.data;
        //alert('Modal Sent Data :'+ dataReturned);
      }
    });

    return await modal.present();

  }
}
