import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { TreeModalPage } from './tree-modal.page';

const routes: Routes = [
  {
    path: '',
    component: TreeModalPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class TreeModalPageRoutingModule {}
