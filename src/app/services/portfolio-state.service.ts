import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';
import { PORTFOLIO_DATA, STACK_CATEGORIES } from '../data/portfolio.data';

@Injectable({
  providedIn: 'root',
})
export class PortfolioStateService {
  private themeSubject = new BehaviorSubject<'light' | 'dark'>('dark');
  private langSubject = new BehaviorSubject<'pl' | 'en'>('pl');

  theme$ = this.themeSubject.asObservable();
  lang$ = this.langSubject.asObservable();

  get currentTheme() {
    return this.themeSubject.value;
  }

  get currentLang() {
    return this.langSubject.value;
  }

  get currentData() {
    return PORTFOLIO_DATA[this.currentLang];
  }

  get stackCategories() {
    return STACK_CATEGORIES;
  }

  toggleTheme() {
    this.themeSubject.next(this.currentTheme === 'light' ? 'dark' : 'light');
  }

  toggleLang() {
    this.langSubject.next(this.currentLang === 'pl' ? 'en' : 'pl');
  }
}
