import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { NewsService } from 'src/app/services/news.service';
import { News } from '../../models/news.model';

@Component({
  selector: 'app-news-detials',
  templateUrl: './news-detials.component.html',
  styleUrls: ['./news-detials.component.scss']
})
export class NewsDetialsComponent implements OnInit {
  id: number = 0;
  new: any;
  news: News[] = [];
  responsiveOptions;

  constructor(private activeRoter: ActivatedRoute, private newsSrv: NewsService) {
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
    this.activeRoter.params.subscribe(param => {
      this.id = param['id']; 
      this.getNewsById();
    })
  }

  getNewsById() {
    this.newsSrv.getNewById(this.id).subscribe((data) => {
      this.new = data;
    });
  }

  getNews() {
    this.newsSrv.getNews().subscribe((data:any) => {
      this.news = data.News;
    })
  }
}
