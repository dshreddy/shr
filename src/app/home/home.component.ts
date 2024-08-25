import { Component } from '@angular/core';
import { ProjectsComponent } from '../projects/projects.component';
import { AboutComponent } from '../about/about.component';
import { ContactComponent } from '../contact/contact.component';
import { LearnComponent } from '../learn/learn.component';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [AboutComponent, ProjectsComponent, ContactComponent, LearnComponent],
  templateUrl: './home.component.html',
  styleUrl: './home.component.css'
})

export class HomeComponent {

}
