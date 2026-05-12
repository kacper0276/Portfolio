import { Component } from '@angular/core';
import { PortfolioStateService } from '../../services/portfolio-state.service';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-stack',
  imports: [CommonModule],
  templateUrl: './stack.html',
  styleUrl: './stack.scss',
})
export class Stack {
  constructor(public state: PortfolioStateService) {}
}
