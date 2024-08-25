import { Component, Input } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-learn-card',
  standalone: true,
  templateUrl: './learn-card.component.html',
  styleUrls: ['./learn-card.component.css'],
  imports: [CommonModule]
})
export class LearnCardComponent {
  @Input() topic: any;

  showMore() {
    
  }
}
