import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ContactRoutingModule } from './contact-routing.module';
import { ContacthomeComponent } from './contacthome/contacthome.component';
import { SharedModule } from '../shared/shared.module';


@NgModule({
  declarations: [
    ContacthomeComponent
  ],
  imports: [
    CommonModule,
    ContactRoutingModule,
    SharedModule
  ]
})
export class ContactModule { }
