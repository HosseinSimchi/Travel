import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { PagesRoutingModule } from './pages-routing.module';
import { PageshomeComponent } from './pageshome/pageshome.component';
import { BannerAreaComponent } from './pageshome/banner-area/banner-area.component';
import { SampleAreaComponent } from './pageshome/sample-area/sample-area.component';
import { ButtonComponent } from './pageshome/button/button.component';
import { AlignAreaComponent } from './pageshome/align-area/align-area.component';
import { SharedModule } from '../shared/shared.module';


@NgModule({
  declarations: [
    PageshomeComponent,
    BannerAreaComponent,
    SampleAreaComponent,
    ButtonComponent,
    AlignAreaComponent
  ],
  imports: [
    CommonModule,
    PagesRoutingModule,
    SharedModule
  ]
})
export class PagesModule { }
