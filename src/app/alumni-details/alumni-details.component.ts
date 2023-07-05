import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Params } from '@angular/router';

import { Ialumni } from '../Ialumni';
import { alumni } from '../alumni';

@Component({
  selector: 'app-alumni-details',
  templateUrl: './alumni-details.component.html',
  styleUrls: ['./alumni-details.component.css']
})
export class AlumniDetailsComponent implements OnInit{
  alumni: Ialumni = {} as Ialumni;
  index: number = 0;

  constructor(private route : ActivatedRoute) {

  }
ngOnInit(): void {
  this.route.params.subscribe((params: Params) => {
    this.index = +params['indexFromRouting'];
    this.alumni = alumni[this.index];
  });
}
}
