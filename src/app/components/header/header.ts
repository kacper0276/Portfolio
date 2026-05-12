import { Component } from '@angular/core';
import { PortfolioStateService } from '../../services/portfolio-state.service';

@Component({
  selector: 'app-header',
  imports: [],
  templateUrl: './header.html',
  styleUrl: './header.scss',
})
export class Header {
  constructor(public state: PortfolioStateService) {}
}
