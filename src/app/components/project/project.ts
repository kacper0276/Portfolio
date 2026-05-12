import { Component } from '@angular/core';
import { PortfolioStateService } from '../../services/portfolio-state.service';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-project',
  imports: [CommonModule],
  templateUrl: './project.html',
  styleUrl: './project.scss',
})
export class Project {
  constructor(public state: PortfolioStateService) {}
}
