import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { HomeRoutingModule } from './home-routing.module';
import { HomeComponent } from './home/home.component';
import { SharedModule } from "../shared/shared.module";
import { PopularComponent } from './popular/popular.component';
import { IssuesComponent } from './issues/issues.component';
import { HomeAboutComponent } from './home-about/home-about.component';
import { BlogAreaComponent } from './blog-area/blog-area.component';
import { BannerAreaComponent } from './banner-area/banner-area.component';


@NgModule({
    declarations: [
        HomeComponent,
        PopularComponent,
        IssuesComponent,
        HomeAboutComponent,
        BlogAreaComponent,
        BannerAreaComponent
    ],
    imports: [
        CommonModule,
        HomeRoutingModule,
        SharedModule
    ]
})
export class HomeModule { }
