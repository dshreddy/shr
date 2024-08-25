import { Component } from '@angular/core';
import { ProjectCardComponent } from '../project-card/project-card.component';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-projects',
  standalone: true,
  imports: [ProjectCardComponent, CommonModule],
  templateUrl: './projects.component.html',
  styleUrls: ['./projects.component.css']
})

export class ProjectsComponent {
  projects = [
    {
      title: 'ARC - Automated Roll Call',
      description: 'An automated attendance system designed for efficiency and accuracy.',
      githubLink: 'https://github.com/your-github/arc-project',
      demoLink: 'https://demo-link.com/arc-project'
    },
    {
      title: 'C-like Language Compiler',
      description: 'A custom compiler for a simplified C-like language, built for learning and exploration.',
      githubLink: 'https://github.com/your-github/compiler-project',
      demoLink: 'https://demo-link.com/compiler-project'
    }
  ];
}
