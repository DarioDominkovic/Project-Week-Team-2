import { Component } from '@angular/core';
import { Istudent } from '../Istudent';
import { students } from '../students';

@Component({
  selector: 'app-stories',
  templateUrl: './stories.component.html',
  styleUrls: ['./stories.component.css']
})
export class StoriesComponent {
  students:Istudent[] = students
}
