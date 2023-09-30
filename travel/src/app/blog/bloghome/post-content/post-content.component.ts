import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { PostsModel } from 'src/app/shared/models/posts.model';
import { PostsService } from 'src/app/shared/services/posts.service';

@Component({
  selector: 'app-post-content',
  templateUrl: './post-content.component.html',
  styleUrls: ['./post-content.component.css']
})
export class PostContentComponent implements OnInit {

  getData! : PostsModel[];
  constructor(private postService: PostsService, private route:ActivatedRoute){}
  ngOnInit() {
    this.route.data.subscribe(data => this.getData = data['getPosts'])
  }

}
