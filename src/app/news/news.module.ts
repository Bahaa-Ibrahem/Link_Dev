import { NgModule } from '@angular/core';
import { CommonModule, SlicePipe } from '@angular/common';

import { NewsRoutingModule } from './news-routing.module';
import { NewsListComponent } from './components/news-list/news-list.component';
import { NewsDetialsComponent } from './components/news-detials/news-detials.component';
import { cuteTextPipe } from '../pipes/cute-text.pipe';
import { MaterialModule } from '../material.module';


@NgModule({
  declarations: [
    NewsListComponent,
    NewsDetialsComponent,
    cuteTextPipe
  ],
  imports: [
    CommonModule,
    NewsRoutingModule,
    MaterialModule
  ],
  providers: [
    SlicePipe
  ]
})
export class NewsModule { }
