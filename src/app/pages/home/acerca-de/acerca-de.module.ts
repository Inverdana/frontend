import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { CustomToolbarModule } from '../../../shared/custom-toolbar/custom-toolbar.module';

import { IonicModule } from '@ionic/angular';

import { AcercaDePageRoutingModule } from './acerca-de-routing.module';

import { AcercaDePage } from './acerca-de.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    AcercaDePageRoutingModule,
    CustomToolbarModule
  ],
  declarations: [AcercaDePage]
})
export class AcercaDePageModule {}
