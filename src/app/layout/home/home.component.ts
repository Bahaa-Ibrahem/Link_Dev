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
  responsiveOptions;
  
  constructor(private newsSrv: NewsService) {
    this.responsiveOptions = [
      {
          breakpoint: '1024px',
          numVisible: 3,
          numScroll: 3
      },
      {
          breakpoint: '768px',
          numVisible: 2,
          numScroll: 2
      },
      {
          breakpoint: '560px',
          numVisible: 1,
          numScroll: 1
      }
  ];
  }

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
