import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ContacthomeComponent } from './contacthome/contacthome.component';

const routes: Routes = [
  {path: '', component:ContacthomeComponent, pathMatch:'full'}
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ContactRoutingModule { }
