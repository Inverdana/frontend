import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { LogrosPageRoutingModule } from './logros-routing.module';

import { LogrosPage } from './logros.page';

import { CustomToolbarModule } from '../../../shared/custom-toolbar/custom-toolbar.module'

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    LogrosPageRoutingModule,
    CustomToolbarModule
  ],
  declarations: [LogrosPage]
})
export class LogrosPageModule {}
