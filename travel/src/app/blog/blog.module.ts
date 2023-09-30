import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { SingleComponent } from './single/single.component';
import { BloghomeComponent } from './bloghome/bloghome.component';
import { SharedModule } from "../shared/shared.module";
import { BannerAreaComponent } from './bloghome/banner-area/banner-area.component';
import { TopCategoriesComponent } from './bloghome/top-categories/top-categories.component';
import { PostContentComponent } from './bloghome/post-content/post-content.component';
import { BannerAreaSingleComponent } from './single/banner-area-single/banner-area-single.component';
import { PostContentSingleComponent } from './single/post-content-single/post-content-single.component';
import { BlogRoutingModule } from './blog-routing.module';


@NgModule({
    declarations: [
        SingleComponent,
        BloghomeComponent,
        BannerAreaComponent,
        TopCategoriesComponent,
        PostContentComponent,
        BannerAreaSingleComponent,
        PostContentSingleComponent
    ],
    imports: [
        CommonModule,
        BlogRoutingModule,
        SharedModule
    ],
    exports:[
      SingleComponent,
      BloghomeComponent
    ]
})
export class BlogModule { }
