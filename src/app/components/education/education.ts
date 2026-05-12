import { Component } from '@angular/core';
import { PortfolioStateService } from '../../services/portfolio-state.service';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-education',
  imports: [CommonModule],
  templateUrl: './education.html',
  styleUrl: './education.scss',
})
export class Education {
  constructor(public state: PortfolioStateService) {}
}
