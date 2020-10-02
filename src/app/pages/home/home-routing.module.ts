import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { HomePage } from './home.page';

const routes: Routes = [
  {
    path: '',
    component: HomePage
  },
  {
    path: 'logros',
    loadChildren: () => import('./logros/logros.module').then( m => m.LogrosPageModule)
  },
  {
    path: 'eventos',
    loadChildren: () => import('./eventos/eventos.module').then( m => m.EventosPageModule)
  },
  {
    path: 'catalogo',
    loadChildren: () => import('./catalogo/catalogo.module').then( m => m.CatalogoPageModule)
  },
  {
    path: 'info',
    loadChildren: () => import('./info/info.module').then( m => m.InfoPageModule)
  },
  {
    path: 'amigos',
    loadChildren: () => import('./amigos/amigos.module').then( m => m.AmigosPageModule)
  },  {
    path: 'tree-modal',
    loadChildren: () => import('./modals/tree-modal/tree-modal.module').then( m => m.TreeModalPageModule)
  },
  {
    path: 'mis-eventos',
    loadChildren: () => import('./mis-eventos/mis-eventos.module').then( m => m.MisEventosPageModule)
  }

];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class HomePageRoutingModule {}
