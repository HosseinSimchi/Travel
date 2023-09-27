import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { AboutRoutingModule } from './about-routing.module';
import { AbouthomeComponent } from './abouthome/abouthome.component';
import { SharedModule } from '../shared/shared.module';
import { BannerAreaComponent } from './banner-area/banner-area.component';
import { AboutInfoComponent } from './about-info/about-info.component';
import { IssuesComponent } from './issues/issues.component';


@NgModule({
  declarations: [
    AbouthomeComponent,
    BannerAreaComponent,
    AboutInfoComponent,
    IssuesComponent
  ],
  imports: [
    CommonModule,
    AboutRoutingModule,
    SharedModule
  ]
})
export class AboutModule { }
