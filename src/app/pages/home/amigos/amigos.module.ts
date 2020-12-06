import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { AmigosPageRoutingModule } from './amigos-routing.module';

import { AmigosPage } from './amigos.page';
import { CustomToolbarModule } from 'src/app/shared/custom-toolbar/custom-toolbar.module';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    AmigosPageRoutingModule,
    CustomToolbarModule
  ],
  declarations: [AmigosPage]
})
export class AmigosPageModule {}
