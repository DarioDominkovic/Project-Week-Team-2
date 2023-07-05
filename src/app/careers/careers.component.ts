import { Component } from '@angular/core';
import { Ijobs } from '../Ijobs';
import { jobs } from '../jobs';


@Component({
  selector: 'app-careers',
  templateUrl: './careers.component.html',
  styleUrls: ['./careers.component.css']
})
export class CareersComponent {
  jobs: Ijobs[] = jobs;
  sortFunction() {
    this.jobs = this.jobs.sort((a, b) =>
      a.job.localeCompare(b.job));
    return this.jobs
  }


}
