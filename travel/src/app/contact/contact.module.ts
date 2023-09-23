import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ContactRoutingModule } from './contact-routing.module';
import { HomeComponent } from './home/home.component';
import { ContacthomeComponent } from './contacthome/contacthome.component';


@NgModule({
  declarations: [
    HomeComponent,
    ContacthomeComponent
  ],
  imports: [
    CommonModule,
    ContactRoutingModule
  ]
})
export class ContactModule { }
