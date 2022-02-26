import { Component, OnInit } from '@angular/core';
import { ThemeService } from 'src/app/services/theme.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {
  navbarOpen = false;

  constructor(private themeService: ThemeService) { }

  ngOnInit(): void {
  }

  toggleNavbar() {
    this.navbarOpen = !this.navbarOpen;
  }

  get dark() {
    return this.themeService.theme === 'dark';
  }

  set dark(enabled: boolean) {
    this.themeService.theme = enabled ? 'dark' : null!;
  }

  get meduimFont() {
    return this.themeService.font === 'meduim';
  }

  set meduimFont(enabled: boolean) {
    this.themeService.font = null!;
  }

  get samllFont() {
    return this.themeService.font === 'small';
  }

  set samllFont(enabled: boolean) {
    this.themeService.font = enabled ? 'small' : null!;
  }

  get largFont() {
    return this.themeService.font === 'larg';
  }

  set largFont(enabled: boolean) {
    this.themeService.font = enabled ? 'larg' : null!;
  }

}
