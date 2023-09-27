import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { PageshomeComponent } from './pageshome/pageshome.component';

const routes: Routes = [
  { path: '', component: PageshomeComponent},
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class PagesRoutingModule { }
