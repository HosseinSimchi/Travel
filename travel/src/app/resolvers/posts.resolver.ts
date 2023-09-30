import {
  ActivatedRouteSnapshot,
  ResolveFn,
  RouterStateSnapshot,
} from '@angular/router';
import { inject } from '@angular/core';
import { Observable, of } from 'rxjs';
import { catchError, map, pluck } from 'rxjs/operators';
import { PostsService } from '../shared/services/posts.service';

export const PostsResolver: ResolveFn<any> = (
  route: ActivatedRouteSnapshot,
  state: RouterStateSnapshot,
  postsListService: PostsService = inject(PostsService)
): Observable<any> =>
postsListService.getPosts("posts").pipe(
    catchError((err) => {
      return of('No data' + err);
    }
    ),
    map((data) => data)
);
