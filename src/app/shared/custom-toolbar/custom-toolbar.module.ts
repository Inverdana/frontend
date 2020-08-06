import { NgModule } from '@angular/core';
import { CustomToolbarComponent } from './custom-toolbar.component';
import { IonicModule } from '@ionic/angular';

@NgModule({
    imports: [ IonicModule ],
    declarations: [ CustomToolbarComponent ],
    exports: [ CustomToolbarComponent ]
}) export class CustomToolbarModule { }