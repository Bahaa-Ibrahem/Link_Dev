import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { News } from 'src/app/news/models/news.model';
import { NewsService } from 'src/app/services/news.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})


export class HomeComponent implements OnInit {
  num: number = 1;
  news: News[] = [];
  constructor(private newsSrv: NewsService) { }

  ngOnInit(): void {
    this.getNews();
  }

  getNews() {
    this.newsSrv.getNews().subscribe((data:any) => {
      this.news = data.News;
    })
  }

  onReduceNum() {
    if (this.num > 1)
      this.num--
  }

  onIncreaseNum() {
    if (this.num < 4)
      this.num++
  }

}
