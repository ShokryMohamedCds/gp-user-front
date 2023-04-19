import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { TimelineRoutingModule } from './timeline-routing.module';
import { TimelineComponent } from './timeline.component';
import {MatCardModule} from '@angular/material/card';
import { MatButtonModule } from '@angular/material/button';
import { PostComponent } from './post/post.component';
import {MatFormFieldModule} from '@angular/material/form-field';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { CommentsComponent } from './comments/comments.component';
import {MatDialogModule} from '@angular/material/dialog';
import { AllcommentsComponent } from './allcomments/allcomments.component';
import { MatInputModule } from '@angular/material/input';
import { CommentFormComponent } from './comment-form/comment-form.component';
import { InfiniteScrollModule } from 'ngx-infinite-scroll';
import { MatIconModule } from '@angular/material/icon';



@NgModule({
  declarations: [
    TimelineComponent,
    PostComponent,
    CommentsComponent,
    AllcommentsComponent,
    CommentFormComponent,
  ],
  imports: [
    CommonModule,
    TimelineRoutingModule,
    MatCardModule,
    MatButtonModule,
    MatFormFieldModule,
    FormsModule,
    ReactiveFormsModule,
    MatDialogModule,
    MatInputModule,
    InfiniteScrollModule,
    MatIconModule
  ],
  exports:[
    MatCardModule,
    MatButtonModule,
    MatFormFieldModule,
    MatDialogModule,
    MatInputModule,
    MatIconModule
  ]
})
export class TimelineModule { }
