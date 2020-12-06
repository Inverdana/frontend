import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { MisEventosPageRoutingModule } from './mis-eventos-routing.module';

import { MisEventosPage } from './mis-eventos.page';
import { CustomToolbarModule } from '../../../shared/custom-toolbar/custom-toolbar.module'

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    MisEventosPageRoutingModule,
    CustomToolbarModule
  ],
  declarations: [MisEventosPage]
})
export class MisEventosPageModule {}
