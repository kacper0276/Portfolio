import { Component } from '@angular/core';
import { PortfolioStateService } from './services/portfolio-state.service';
import { Education } from './components/education/education';
import { Experience } from './components/experience/experience';
import { Header } from './components/header/header';
import { Stack } from './components/stack/stack';
import { CommonModule } from '@angular/common';
import { Project } from './components/project/project';

@Component({
  selector: 'app-root',
  imports: [Education, Experience, Header, Stack, Project, CommonModule],
  templateUrl: './app.html',
  styleUrl: './app.scss',
})
export class App {
  protected title = 'portfolio';
  constructor(public state: PortfolioStateService) {}
}
