import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { EventsComponent } from './events/events.component';
import { NavbarComponent } from './navbar/navbar.component';
import { FooterComponent } from './footer/footer.component';
import { HomeComponent } from './home/home.component';

import { StoriesComponent } from './stories/stories.component';
import { StoriesDetailsComponent } from './stories-details/details.component';

import { CareersComponent } from './careers/careers.component';
import { DetailsComponent } from './details/details.component';
import { ReactiveFormsModule } from '@angular/forms';

import { AlumniDetailsComponent } from './alumni-details/alumni-details.component';
import { AlumniListComponent } from './alumni-list/alumni-list.component';

@NgModule({
  declarations: [
    AppComponent,
    EventsComponent,
    NavbarComponent,
    FooterComponent,
    HomeComponent,
    StoriesComponent,
    StoriesDetailsComponent,
    CareersComponent,
    DetailsComponent,
    AlumniDetailsComponent,
    AlumniListComponent,
  ],
  imports: [BrowserModule, AppRoutingModule, ReactiveFormsModule],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
