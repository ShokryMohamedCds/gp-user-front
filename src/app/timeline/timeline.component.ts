import { Component, OnInit } from '@angular/core';
import { Posts } from '../models/posts';

@Component({
  selector: 'app-timeline',
  templateUrl: './timeline.component.html',
  styleUrls: ['./timeline.component.css']
})
export class TimelineComponent implements OnInit {

  constructor() { }
  image:string="https://material.angular.io/assets/img/examples/shiba1.jpg";
  showcomments:boolean=false;
  posts:Posts[]=[
    {
      id:"1",
      isliked:true,
      date:"4/8/2001",
      creatorname:"Kakashi Sensi",
      postimage:"https://img.cdn-pictorem.com/uploads/collection/E/EF5MND10RMF/900_Coolbits-Art_kakashi1.jpg",
      creatorimage:"https://image.winudf.com/v2/image/Y29tLktha2FzaGlIYXRha2VXYWxscGFwZXIuUHJhc2V0eW9XYWxscGFwZXJIRF9zY3JlZW5fMV8xNTE2Nzg0MzYxXzAwNg/screen-1.jpg?fakeurl=1&type=.webp",
      postsubject:"Kakashi Hatake (はたけカカシ, Hatake Kakashi) is a shinobi of Konohagakure's Hatake clan. Famed as Kakashi of the Sharingan (写輪眼のカカシ, Sharingan no Kakashi), he is one of Konoha's most talented ninja, regularly looked to for advice and leadership despite his personal dislike of responsibility. To his students on Team 7,",
      comments:[
        {
          id:"1",
          creatorname:"Kakashi Sensi",
    creatorimage:"https://image.winudf.com/v2/image/Y29tLktha2FzaGlIYXRha2VXYWxscGFwZXIuUHJhc2V0eW9XYWxscGFwZXJIRF9zY3JlZW5fMV8xNTE2Nzg0MzYxXzAwNg/screen-1.jpg?fakeurl=1&type=.webp",
    date:"4/8/2001",
    commentsubject:"Kakashi Hatake (はたけカカシ, Hatake Kakashi) is a shinobi of Konohagakure's Hatake clan. Famed as Kakashi of the Sharingan (写輪眼のカカシ, Sharingan no Kakashi), he is one of Konoha's most talented ninja, regularly looked to for advice and leadership despite his personal dislike of responsibility. To his students on Team 7,",
        },
        {
          id:"2",
          creatorname:"Kakashi Sensi",
    creatorimage:"https://image.winudf.com/v2/image/Y29tLktha2FzaGlIYXRha2VXYWxscGFwZXIuUHJhc2V0eW9XYWxscGFwZXJIRF9zY3JlZW5fMV8xNTE2Nzg0MzYxXzAwNg/screen-1.jpg?fakeurl=1&type=.webp",
    date:"4/8/2001",
    commentsubject:"Kakashi Hatake (はたけカカシ, Hatake Kakashi) is a shinobi of Konohagakure's Hatake clan. Famed as Kakashi of the Sharingan (写輪眼のカカシ, Sharingan no Kakashi), he is one of Konoha's most talented ninja, regularly looked to for advice and leadership despite his personal dislike of responsibility. To his students on Team 7,",
        },
      ]
    },
    {
      id:"2",
      isliked:false,
      date:"4/8/2001",
      creatorname:"Hatake Kakashi",
      postimage:"https://img.cdn-pictorem.com/uploads/collection/E/EF5MND10RMF/900_Coolbits-Art_kakashi1.jpg",
      creatorimage:"https://image.winudf.com/v2/image/Y29tLktha2FzaGlIYXRha2VXYWxscGFwZXIuUHJhc2V0eW9XYWxscGFwZXJIRF9zY3JlZW5fMV8xNTE2Nzg0MzYxXzAwNg/screen-1.jpg?fakeurl=1&type=.webp",
      postsubject:"Kakashi Hatake (はたけカカシ, Hatake Kakashi) is a shinobi of Konohagakure's Hatake clan. Famed as Kakashi of the Sharingan (写輪眼のカカシ, Sharingan no Kakashi), he is one of Konoha's most talented ninja, regularly looked to for advice and leadership despite his personal dislike of responsibility. To his students on Team 7,",
      comments:[
        {
          id:"3",
          creatorname:"Hatake Kakashi",
    creatorimage:"https://image.winudf.com/v2/image/Y29tLktha2FzaGlIYXRha2VXYWxscGFwZXIuUHJhc2V0eW9XYWxscGFwZXJIRF9zY3JlZW5fMV8xNTE2Nzg0MzYxXzAwNg/screen-1.jpg?fakeurl=1&type=.webp",
    date:"4/8/2001",
    commentsubject:"Kakashi Hatake (はたけカカシ, Hatake Kakashi) is a shinobi of Konohagakure's Hatake clan. Famed as Kakashi of the Sharingan (写輪眼のカカシ, Sharingan no Kakashi), he is one of Konoha's most talented ninja, regularly looked to for advice and leadership despite his personal dislike of responsibility. To his students on Team 7,",
        },
        {
          id:"4",
          creatorname:"Hatake Kakashi",
    creatorimage:"https://image.winudf.com/v2/image/Y29tLktha2FzaGlIYXRha2VXYWxscGFwZXIuUHJhc2V0eW9XYWxscGFwZXJIRF9zY3JlZW5fMV8xNTE2Nzg0MzYxXzAwNg/screen-1.jpg?fakeurl=1&type=.webp",
    date:"4/8/2001",
    commentsubject:"Kakashi Hatake (はたけカカシ, Hatake Kakashi) is a shinobi of Konohagakure's Hatake clan. Famed as Kakashi of the Sharingan (写輪眼のカカシ, Sharingan no Kakashi), he is one of Konoha's most talented ninja, regularly looked to for advice and leadership despite his personal dislike of responsibility. To his students on Team 7,",
        },
      ]
    },
  ];

  ngOnInit(): void {
this.posts.forEach(post => {
      post.showcomment=false;

});
 }
  classApplied = false;

  toggleClass() {
    this.classApplied = !this.classApplied;
  }
}
