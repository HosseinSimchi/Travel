import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { NotFoundComponent } from './not-found/not-found.component';

const routes: Routes = [
  {path : '',pathMatch:'full', loadChildren: () => import("./home/home.module")
                                  .then((m) => m.HomeModule)},
  {path : 'blogs', loadChildren: () => import("./blog/blog.module")
                                  .then((m) => m.BlogModule)},
  {path : 'about', loadChildren: () => import("./about/about.module")
                                  .then((m) => m.AboutModule)},
  {path : 'pages', loadChildren: () => import("./pages/pages.module")
                                  .then((m) => m.PagesModule)},
  {path : 'contact', loadChildren: () => import("./contact/contact.module")
                                  .then((m) => m.ContactModule)},
  {path : '**' , component : NotFoundComponent, pathMatch:'full'},

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
