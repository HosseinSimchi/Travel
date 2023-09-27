import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { PageshomeComponent } from './pageshome/pageshome.component';
import { ElementsComponent } from './elements/elements.component';

const routes: Routes = [
  { path: '', component: PageshomeComponent},
  { path: 'elements', component:ElementsComponent}
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class PagesRoutingModule { }
