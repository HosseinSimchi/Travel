import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { BlogRoutingModule } from './blog-routing.module';
import { HomeComponent } from './home/home.component';
import { SingleComponent } from './single/single.component';
import { BloghomeComponent } from './bloghome/bloghome.component';


@NgModule({
  declarations: [
    HomeComponent,
    SingleComponent,
    BloghomeComponent
  ],
  imports: [
    CommonModule,
    BlogRoutingModule
  ]
})
export class BlogModule { }
