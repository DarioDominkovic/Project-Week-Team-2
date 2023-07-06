import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { AlumniDetailsComponent } from './alumni-details/alumni-details.component';
import { CareersComponent } from './careers/careers.component';
import { AlumniListComponent } from './alumni-list/alumni-list.component';
import { DetailsComponent } from './details/details.component';
import { StoriesComponent } from './stories/stories.component';
import { StoriesDetailsComponent } from './stories-details/details.component';
import { EventsComponent } from './events/events.component';

const routes: Routes = [
  {
    path: '',
    component: HomeComponent,
  },
  {
    path: 'alumni-list',
    component: AlumniListComponent,
  },
  {
    path: 'alumni/:indexFromRouting',
    component: AlumniDetailsComponent,
  },
  {
    path: 'careers',
    component: CareersComponent,
  },
  {
    path: 'jobs-details/:index',
    component: DetailsComponent,
  },
  {
    path: 'stories',
    component: StoriesComponent,
  },
  {
    path: 'student/:id',
    component: StoriesDetailsComponent,
  },
  {
    path: 'events',
    component: EventsComponent,
  },
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, { scrollPositionRestoration: 'enabled' }),
  ],
  exports: [RouterModule],
})
export class AppRoutingModule {}
