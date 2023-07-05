import { Component, OnInit } from '@angular/core';
import { Ijobs } from '../Ijobs';
import { jobs } from '../jobs';
import { ActivatedRoute } from '@angular/router';
import { FormGroup, FormControl, Validators } from '@angular/forms';


@Component({
  selector: 'app-details',
  templateUrl: './details.component.html',
  styleUrls: ['./details.component.css']
})
export class DetailsComponent implements OnInit {

  job: Ijobs = {} as Ijobs;
  index: number = 0;

  constructor(private activatedRoute: ActivatedRoute,) {

  }

  ngOnInit(): void {
    this.activatedRoute.params.subscribe((params: any) => {
      this.index = Number(params["index"]);
      this.job = jobs[this.index];
    })

  }

  isShowDivIf = false;
  toggleDisplayDivIf() {
    this.isShowDivIf = !this.isShowDivIf;
  }


  info = new FormGroup({
    email: new FormControl('', Validators.required),
    lastName: new FormControl('', Validators.required),
    motivation: new FormControl('', Validators.required),
  });

  onSubmit() {
    if (this.info.valid) {
      alert("Thank you! We will contact you soon!")
    }
    else {
      alert("Please fill required information")
    }
    this.info.reset();
  }
}
