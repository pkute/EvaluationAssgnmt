import { Injectable } from '@angular/core';
import { Observable, observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class RecipiesService {

  constructor() { }

  hashtags= ["cheeslove","food","noodelslover","cookies","coffeelover"];

  myPosts = [
    {
      id:1,
      name:"Geeta Das",
      createdAt:Date(),
      likesCount:400,
      commentCount:7500,
      image:"assets/dish1.jpg",
      userId:"111",
      hashtag:"cheeslove",
      postType:"image"  
    },
    {
      id:2,
      name:"Geeta Das",
      createdAt:Date(),
      likesCount:40,
      commentCount:70,
      image:"assets/dish4.jpg",
      userId:"111",
      hashtag:"noodelslover" ,
      postType:"image"
    },
    {
      id:3,
      name:"Geeta Das",
      createdAt:Date(),
      likesCount:6000,
      commentCount:59,
      image:"assets/dish8.jpg",
      userId:"111",
      hashtag:"cookies",
      postType:"image" 
    },
    {
      id:4,
      name:"Geeta Das",
      createdAt:Date(),
      likesCount:30,
      commentCount:5760,
      image:"assets/dish9.jpg",
      userId:"111",
      hashtag:"food",
      postType:"image" 
    },
    {
      id:5,
      name:"Geeta Das",
      createdAt:Date(),
      likesCount:600,
      commentCount:6700,
      image:"assets/dish20.jpg",
      userId:"111",
      hashtag:"coffeelover",
      postType:"image" 
    },
    {
      id:6,
      name:"Geeta Das",
      createdAt:Date(),
      likesCount:84000,
      commentCount:3000,
      image:"assets/dish9.jpg",
      userId:"111",
      hashtag:"cheeslove",
      postType:"image"  
    },
    {
      id:6,
      name:"Geeta Das",
      createdAt:Date(),
      likesCount:84000,
      commentCount:3000,
      image:"ahttps://www.youtube.com/embed/P-trSZfdPUw",
      userId:"111",
      hashtag:"cheeslove",
      postType:"video"  
    },
    {
      id:6,
      name:"Geeta Das",
      createdAt:Date(),
      likesCount:84000,
      commentCount:3000,
      image:"assets/dish18.jpg",
      userId:"111",
      hashtag:"cheeslove",
      postType:"image"  
    },
    {
      id:6,
      name:"Geeta Das",
      createdAt:Date(),
      likesCount:84000,
      commentCount:3000,
      image:"assets/dish1.jpg",
      userId:"111",
      hashtag:"cheeslove",
      postType:"image"  
    },
    {
      id:6,
      name:"Geeta Das",
      createdAt:Date(),
      likesCount:84000,
      commentCount:3000,
      image:"assets/dish18.jpg",
      userId:"111",
      hashtag:"food",
      postType:"image"  
    }
  ];

  simillarPost = [
    {
      id:1,
      name:"Geeta Das",
      createdAt:Date(),
      likesCount:1400,
      commentCount:700,
      image:"assets/dish1.jpg",
      userId:"111",
      hashtag:"food",
      postType:"image" 
    },
    {
      id:2,
      name:"Neha Das",
      createdAt:Date(),
      likesCount:40,
      commentCount:70,
      image:"assets/dish20.jpg",
      userId:"112",
      hashtag:"noodelslover",
      postType:"video"  
    },
    {
      id:3,
      name:"Nikita Gupta",
      createdAt:Date(),
      likesCount:600,
      commentCount:2400,
      image:"assets/dish6.jpg",
      userId:"113",
      hashtag:"cookies",
      postType:"image" 
    },
    {
      id:4,
      name:"Geeta Das",
      createdAt:Date(),
      likesCount:1130,
      commentCount:500000,
      image:"assets/dish22.jpg",
      userId:"111",
      hashtag:"cheeslove",
      postType:"image"   
    },
    {
      id:5,
      name:"Vasudha Reddy",
      createdAt:Date(),
      likesCount:600,
      commentCount:50,
      image:"assets/dish16.jpg",
      userId:"114",
      hashtag:"cheeslove",
      postType:"image" 
    },
    {
      id:6,
      name:"Renuka Patil",
      createdAt:Date(),
      likesCount:800,
      commentCount:9800,
      image:"assets/dish6.jpg",
      userId:"115",
      hashtag:"food",
      postType:"image" 
    },
    {
      id:6,
      name:"Neha Patil",
      createdAt:Date(),
      likesCount:800,
      commentCount:9800,
      image:"assets/dish4.jpg",
      userId:"116",
      hashtag:"cheeslove",
      postType:"image" 
    },
    {
      id:6,
      name:"Sunitha Patil",
      createdAt:Date(),
      likesCount:800,
      commentCount:9800,
      image:"assets/dish9.jpg",
      userId:"117",
      hashtag:"cheeslove",
      postType:"image" 
    }
  ];

  getRecipies(){
    var recipiesArray = new Observable(observer => {
      if(this.simillarPost.length === 0){
        observer.error("No Data Found")
      }else{
        observer.next(this.simillarPost);
        observer.complete();
      }
    })
    return recipiesArray;
  }

  getMyPosts(){
    var posts = new Observable(observer => {
      if(this.myPosts.length === 0){
        observer.error("No Data Found")
      }else{
        observer.next(this.myPosts);
        observer.complete();
      }
    })
    return posts;
  }

  getAllHashtags(){
    var hashtags = new Observable(observer => {
      if(this.hashtags.length === 0){
        observer.error("No Data Found")
      }else{
        observer.next(this.hashtags);
        observer.complete();
      }
    })
    return hashtags;
  }
 

}
