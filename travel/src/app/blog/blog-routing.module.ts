import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { BloghomeComponent } from './bloghome/bloghome.component';
import { SingleComponent } from './single/single.component';

const routes: Routes = [
  {path:'', component:BloghomeComponent, pathMatch:"full"},
  {path:'blogs/single', component:SingleComponent}
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class BlogRoutingModule { }
