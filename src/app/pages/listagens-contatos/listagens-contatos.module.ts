import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { ListagensContatosPageRoutingModule } from './listagens-contatos-routing.module';

import { ListagensContatosPage } from './listagens-contatos.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    ListagensContatosPageRoutingModule
  ],
  declarations: [ListagensContatosPage]
})
export class ListagensContatosPageModule {}
