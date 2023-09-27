import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ContactRoutingModule } from './contact-routing.module';
import { ContacthomeComponent } from './contacthome/contacthome.component';
import { SharedModule } from '../shared/shared.module';
import { BannerAreaComponent } from './contacthome/banner-area/banner-area.component';
import { ContactPageComponent } from './contacthome/contact-page/contact-page.component';


@NgModule({
  declarations: [
    ContacthomeComponent,
    BannerAreaComponent,
    ContactPageComponent
  ],
  imports: [
    CommonModule,
    ContactRoutingModule,
    SharedModule
  ]
})
export class ContactModule { }
