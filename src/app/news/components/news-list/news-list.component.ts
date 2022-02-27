import { Component, OnInit } from '@angular/core';
import { Data } from '@angular/router';
import { NewsService } from 'src/app/services/news.service';
import { News } from '../../models/news.model';

@Component({
  selector: 'app-news-list',
  templateUrl: './news-list.component.html',
  styleUrls: ['./news-list.component.scss']
})
export class NewsListComponent implements OnInit {
  news: News[] = [];
  newsOrignal: News[] = [];
  keyword: string = '';
  dataDate: Date = new Date;

  constructor(private newsSrv: NewsService) { }

  ngOnInit(): void {
    this.getNews();
  }

  getNews() {
    this.newsSrv.getNews().subscribe((data:any) => {
      this.news = data.News;
      this.newsOrignal = this.news;
    })
  }

  onSearchChange() {
    this.news = this.newsOrignal.filter((news => {
     return news.title.toLowerCase().includes(this.keyword.toLowerCase());
    }));
  }
}
