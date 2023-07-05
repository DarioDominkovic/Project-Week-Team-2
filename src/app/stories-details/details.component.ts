import { Component } from '@angular/core';
import { Istudent } from '../Istudent';
import { students } from '../students';
import { ActivatedRoute, Params } from '@angular/router';

@Component({
  selector: 'app-stories-details',
  templateUrl: './details.component.html',
  styleUrls: ['./details.component.css'],
})
export class StoriesDetailsComponent {
  student: Istudent = {} as Istudent;
  id: number = 0;
  constructor(private route: ActivatedRoute) {}

  ngOnInit(): void {
    this.route.params.subscribe((params: any) => {
      this.id = +params['id'];
      this.student = students[this.id];
    });
  }
}
