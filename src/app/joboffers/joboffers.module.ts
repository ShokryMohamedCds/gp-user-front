import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MatTableModule } from '@angular/material/table';
import { MatSortModule } from '@angular/material/sort';
import { MatPaginatorModule } from '@angular/material/paginator';
import { MatIconModule } from '@angular/material/icon';

import { JoboffersRoutingModule } from './joboffers-routing.module';
import { JoboffersComponent } from './joboffers.component';

@NgModule({
  declarations: [JoboffersComponent],
  imports: [
    CommonModule,
    JoboffersRoutingModule,
    MatTableModule,
    MatSortModule,
    MatPaginatorModule,
    MatIconModule,
  ],
})
export class JoboffersModule {}
