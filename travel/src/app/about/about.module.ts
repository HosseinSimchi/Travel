import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AbouthomeComponent } from './abouthome/abouthome.component';
import { SharedModule } from '../shared/shared.module';
import { BannerAreaComponent } from './banner-area/banner-area.component';
import { AboutInfoComponent } from './about-info/about-info.component';
import { IssuesComponent } from './issues/issues.component';
import { AboutRoutingModule } from './about-routing.module';
import { RouterModule } from '@angular/router';


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
