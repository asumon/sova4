import { Component, Inject } from '@angular/core';
import { Http } from '@angular/http';
import { PostService } from '../../../PostService';

@Component({
    selector: 'Search',
    templateUrl: './search.component.html'
})
export class SearchComponent {
    posts: any;
    constructor(private postService: PostService) {

    }

    searchQuery(search: any) {
        this.posts = [];
        this.postService.getSearchPost(search).subscribe(x => { this.posts = x; });


    }
    
}
