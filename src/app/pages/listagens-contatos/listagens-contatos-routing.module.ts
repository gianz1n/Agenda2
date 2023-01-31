import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { ListagensContatosPage } from './listagens-contatos.page';

const routes: Routes = [
  {
    path: '',
    component: ListagensContatosPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class ListagensContatosPageRoutingModule {}
