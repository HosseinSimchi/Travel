import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { PagesRoutingModule } from './pages-routing.module';
import { ElementsComponent } from './elements/elements.component';
import { PageshomeComponent } from './pageshome/pageshome.component';


@NgModule({
  declarations: [
    ElementsComponent,
    PageshomeComponent
  ],
  imports: [
    CommonModule,
    PagesRoutingModule
  ]
})
export class PagesModule { }
