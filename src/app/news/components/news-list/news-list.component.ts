import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { NewsService } from 'src/app/services/news.service';
import { News } from '../../models/news.model';

@Component({
  selector: 'app-news-list',
  templateUrl: './news-list.component.html',
  styleUrls: ['./news-list.component.scss']
})
export class NewsListComponent implements OnInit {
  news: News[] = [];

  // news: Observable<NewsModule>;

  constructor(private newsSrv: NewsService) { }

  ngOnInit(): void {
    this.getNews();
  }

  getNews() {
    this.newsSrv.getNews().subscribe((data:any) => {
      this.news = data.News;
      console.log(this.news[0].id);
    })
  }
}
