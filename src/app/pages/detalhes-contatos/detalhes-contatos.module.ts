import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { DetalhesContatosPageRoutingModule } from './detalhes-contatos-routing.module';

import { DetalhesContatosPage } from './detalhes-contatos.page';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { SimpleMaskModule } from 'ngx-ion-simple-mask'


@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    DetalhesContatosPageRoutingModule,
    ReactiveFormsModule,
    SimpleMaskModule
  ],
  declarations: [DetalhesContatosPage]
})
export class DetalhesContatosPageModule {}
44