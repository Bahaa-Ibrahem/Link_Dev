import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NewsDetialsComponent } from './news-detials.component';

describe('NewsDetialsComponent', () => {
  let component: NewsDetialsComponent;
  let fixture: ComponentFixture<NewsDetialsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ NewsDetialsComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(NewsDetialsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
