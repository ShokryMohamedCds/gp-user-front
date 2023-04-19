import { Component, Input, OnInit } from '@angular/core';
import { FormBuilder } from '@angular/forms';
import { MatDialog } from '@angular/material/dialog';
import { AllcommentsComponent } from '../allcomments/allcomments.component';
import { Posts } from 'src/app/models/posts';


@Component({
  selector: 'app-post',
  templateUrl: './post.component.html',
  styleUrls: ['./post.component.css']
})
export class PostComponent implements OnInit {

  constructor(private formBuilder: FormBuilder,public dialog: MatDialog) { }

  @Input() posts!: Posts[] ;
  showcomments:boolean=false;
  ngOnInit(): void {

  }
  image:string="https://material.angular.io/assets/img/examples/shiba1.jpg";
  classApplied = false;
  checkoutForm = this.formBuilder.group({
    Comment: '',
  });

  toggleClass(post:Posts) {
    post.isliked = !post.isliked;
  }
  toggleComment(post:Posts){
    post.showcomment = !post.showcomment;
  }
  onSubmit(): void {
    // Process checkout data here
    console.warn('Your order has been submitted', this.checkoutForm.value);
    this.checkoutForm.reset();
  }
  openDialog(post:Posts) {
    const dialogRef = this.dialog.open(AllcommentsComponent,{
      data: {
        post: post,
      },
    });;

    dialogRef.afterClosed().subscribe(result => {
      console.log(post);

      console.log(`Dialog result: ${result}`);
    });
  }
}
