import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { IonicModule } from '@ionic/angular';
import { CatalogoPageRoutingModule } from './catalogo-routing.module';
import { CatalogoPage } from './catalogo.page';
import { CustomToolbarModule } from '../../../shared/custom-toolbar/custom-toolbar.module'


@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    CatalogoPageRoutingModule,
    CustomToolbarModule
  ],
  declarations: [CatalogoPage]
})
export class CatalogoPageModule {}
