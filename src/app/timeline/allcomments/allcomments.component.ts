import { Component, Inject, Input, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { Posts } from 'src/app/models/posts';
import {MAT_DIALOG_DATA} from '@angular/material/dialog';

@Component({
  selector: 'app-allcomments',
  templateUrl: './allcomments.component.html',
  styleUrls: ['./allcomments.component.css']
})
export class AllcommentsComponent implements OnInit {

  constructor(   @Inject(MAT_DIALOG_DATA) public data: any  ) { }
  ngOnInit(): void {
    console.log(this.data.post);
  }


}
