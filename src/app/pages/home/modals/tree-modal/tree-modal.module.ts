import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { TreeModalPageRoutingModule } from './tree-modal-routing.module';

import { TreeModalPage } from './tree-modal.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    TreeModalPageRoutingModule
  ],
  declarations: [TreeModalPage]
})
export class TreeModalPageModule {}
