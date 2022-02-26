import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { NewsDetialsComponent } from './components/news-detials/news-detials.component';
import { NewsListComponent } from './components/news-list/news-list.component';

const routes: Routes = [
  { path: '', component: NewsListComponent },
  { path: '/news', component: NewsListComponent },
  { path: '/news:id', component: NewsDetialsComponent }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class NewsRoutingModule { }
