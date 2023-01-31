import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { DetalhesContatosPage } from './detalhes-contatos.page';

const routes: Routes = [
  {
    path: '',
    component: DetalhesContatosPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class DetalhesContatosPageRoutingModule {}
