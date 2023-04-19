import { Component, Input, OnInit } from '@angular/core';
import { FormBuilder } from '@angular/forms';
import { Comments } from 'src/app/models/comments';

@Component({
  selector: 'app-comments',
  templateUrl: './comments.component.html',
  styleUrls: ['./comments.component.css']
})
export class CommentsComponent implements OnInit {

  constructor(private formBuilder: FormBuilder) { }
 @Input() comment?: Comments[]  ;

  ngOnInit(): void {
  }
  checkoutForm = this.formBuilder.group({
    Comment: '',
  });
  onSubmit(): void {
    // Process checkout data here
    console.warn('Your order has been submitted', this.checkoutForm.value);
    this.checkoutForm.reset();
  }

}
