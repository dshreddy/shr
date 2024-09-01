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
      image: 'assets/learn/react-native.png',
      title: 'React Native',
      description: 'Understanding the fundamentals of React Native.',
      disabled: true,
      link: ''
    },
    {
      image: 'assets/learn/software-engineering.png',
      title: 'Software Engineering Principles',
      description: 'Learning Object Oriented Design, GUI prohramming.',
      disabled: false,
      link: 'https://github.com/dshreddy/shr/tree/main/src/assets/learnSE-Notes/Software-Engineering.md'
    },
    {
      image: 'assets/learn/computer-networks.png',
      title: 'Computer Networks',
      description: 'Learning Computer Networks.',
      disabled: true,
      link: ''
    },
    {
      image: 'assets/learn/algo-big-data.png',
      title: 'Algorithms for Big Data',
      description: 'Learn Algorithms for Big data.',
      disabled: true,
      link: ''
    }
  ];
}