import { Post } from './post.model';
import { Injectable } from '@angular/core';
import { Subject } from 'rxjs';


@Injectable({providedIn: 'root'})
export class PostService {
    listChanged = new Subject<Post[]>();
    listOfPosts: Post[] = [
      
    ];
    addPost(post : Post) {
        this.listOfPosts.unshift(post);

    } 

    deletePost(index : number) {
        this.listOfPosts.splice(index,1);
    }
     
    updatePost(index:number , post: Post) {
        this.listOfPosts[index] = post;
    }

    getPosts()
   {
       return this.listOfPosts;
   }
   getPost( index : number) {
       return this.listOfPosts[index];
   }
   setPosts(listOfPosts :Post[]) {
       this.listOfPosts = listOfPosts;
       this.listChanged.next(listOfPosts);
   }


}
