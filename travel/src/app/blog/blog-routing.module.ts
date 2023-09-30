import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { BloghomeComponent } from './bloghome/bloghome.component';
import { SingleComponent } from './single/single.component';
import { PostsResolver } from '../resolvers/posts.resolver';

const routes: Routes = [
  {path:'', component:BloghomeComponent, pathMatch:"full", resolve : {getPosts:PostsResolver}},
  {path:'blogs/single', component:SingleComponent}
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class BlogRoutingModule { }
