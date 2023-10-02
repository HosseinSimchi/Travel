import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NotFoundComponent } from './not-found/not-found.component';
import { HomeModule } from './home/home.module';
import { AboutModule } from './about/about.module';
import { BlogModule } from './blog/blog.module';
import { ContactModule } from './contact/contact.module';
import { SharedModule } from './shared/shared.module';
import { PagesModule } from './pages/pages.module';
import { HTTP_INTERCEPTORS, HttpClientModule } from '@angular/common/http';
import { PostsHttpInterceptor } from './interceptors/posts-http.interceptor';
import { ButtonComponent } from './components/designedComponents/button/button.component';
import { DropdownComponent } from './components/designedComponents/Dropdown/dropdown/dropdown.component';

@NgModule({
  declarations: [
    AppComponent,
    NotFoundComponent,
    ButtonComponent,
    DropdownComponent
  ],
  imports: [
    BrowserModule,
    HomeModule,
    AboutModule,
    BlogModule,
    ContactModule,
    SharedModule,
    PagesModule,
    HttpClientModule,
    AppRoutingModule
  ],
  providers: [
    {provide:HTTP_INTERCEPTORS, useClass:PostsHttpInterceptor, multi:true},
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
