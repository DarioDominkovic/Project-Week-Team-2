import { Component } from '@angular/core';
import { Ialumni } from '../Ialumni';
import { alumni } from '../alumni';

@Component({
  selector: 'app-alumni-list',
  templateUrl: './alumni-list.component.html',
  styleUrls: ['./alumni-list.component.css']
})
export class AlumniListComponent {

  alumni: Ialumni[]= alumni
}
