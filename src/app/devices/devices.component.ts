import { NgForm } from '@angular/forms';
import { Component, OnInit } from "@angular/core";
import { ActivatedRoute, ParamMap } from "@angular/router";
import { PostsService } from './device.service';
import {Post} from './device.model'

@Component({
  selector: 'app-devices',
  templateUrl: './devices.component.html',
  styleUrls: ['./devices.component.scss']
})
export class AppDevicesComponent implements OnInit {

  enteredTitle = "";
  enteredContent = "";
  post: Post;
  isLoading = false;
  private mode = "create";
  private postId: string;


  constructor(
    public postsService: PostsService,
    public route: ActivatedRoute
  ) {}

  // edit btn
  ngOnInit() {
    this.route.paramMap.subscribe((paramMap: ParamMap) => {
      if (paramMap.has("postId")) {
        this.mode = "edit";
        this.postId = paramMap.get("postId");
        this.isLoading = true;
        this.postsService.getPost(this.postId).subscribe(postData => {
          this.isLoading = false;
          this.post = {id: postData._id, item: postData.item, location: postData.location};
        });
      } else {
        this.mode = "create";
        this.postId = null;
      }
    });
  }



  
// submit btn => if the mode is create add else update
  onSavePost(form: NgForm) {
    if (form.invalid) {
      return;
    }
    this.isLoading = true;
    if (this.mode === "create") {
      this.postsService.addPost(form.value.item, form.value.location);
    } else {
      this.postsService.updatePost(
        this.postId,
        form.value.item,
        form.value.location
      );
    }
    form.resetForm();
  }
}


