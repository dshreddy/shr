import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { LearnCardComponent } from '../learn-card/learn-card.component';

@Component({
  selector: 'app-learn',
  standalone: true,
  templateUrl: './learn.component.html',
  styleUrls: ['./learn.component.css'],
  imports: [CommonModule, LearnCardComponent]
})
export class LearnComponent {
  learningTopics = [
    {
      title: 'Angular Basics',
      description: 'Understanding the fundamentals of Angular, including components and modules.',
      id: 'angular-basics'
    },
    {
      title: 'TypeScript',
      description: 'Learning TypeScript features and how it enhances JavaScript.',
      id: 'typescript'
    }
  ];
}