import { Component, OnInit } from '@angular/core';
import { RecipiesService } from '../recipies.service';

@Component({
  selector: 'app-my-posts',
  templateUrl: './my-posts.component.html',
  styleUrls: ['./my-posts.component.css']
})
export class MyPostsComponent implements OnInit {

  myPosts:any;
  hashtags:any;
  serchHashtag:any;
  recipies:any;
  searchTerm:any;

  constructor(private recipiesData:RecipiesService) { }

  ngOnInit() {
    this.getHashtags();
    this.serchHashtag="#cheeslove";
    this.getMyPost();
    this.getRecipiesFromService();
  }

  /* Function for get all hashtag array */
  getHashtags(){
    this.recipiesData.getAllHashtags().subscribe(
      data => {
        this.hashtags = data;
      }, err =>{
        console.log(err);
      }, () =>{
        console.log("Completed");
      }
    )
  }

  /* Function for Get user posts */
  getMyPost(){
    this.recipiesData.getMyPosts().subscribe(
      data => {
        this.myPosts = data;
      }, err =>{
        console.log(err);
      }, () =>{
        console.log("Completed");
      }
    )
  }

  /* Function For get Simillar posts */
  getRecipiesFromService(){
    this.recipiesData.getRecipies().subscribe(
      data => {
        this.recipies = data;
      }, err =>{
        console.log(err);
      }, () =>{
        console.log("Completed");
      }
    )
  }

}
