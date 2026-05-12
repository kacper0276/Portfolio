import { Component } from '@angular/core';
import { PortfolioStateService } from '../../services/portfolio-state.service';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-experience',
  imports: [CommonModule],
  templateUrl: './experience.html',
  styleUrl: './experience.scss',
})
export class Experience {
  expandedRows: { [key: number]: boolean } = { 0: true };

  constructor(public state: PortfolioStateService) {}

  toggleRow(index: number) {
    this.expandedRows[index] = !this.expandedRows[index];
  }
}
