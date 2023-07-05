import { Component, OnInit } from '@angular/core';
import { events } from '../event-list';
import { IEvents } from '../IEvents';

@Component({
  selector: 'app-events',
  templateUrl: './events.component.html',
  styleUrls: ['./events.component.css'],
})
export class EventsComponent implements OnInit {
  events: IEvents[] = [];
  isGridView = false;
  showOnSiteOnly = false;

  ngOnInit() {
    this.filterEvents();
  }

  switchView() {
    this.isGridView = !this.isGridView;
  }

  switchLocation() {
    this.showOnSiteOnly = !this.showOnSiteOnly;
    this.filterEvents();
  }

  private filterEvents() {
    if (this.showOnSiteOnly) {
      this.events = events.filter((event) => event.location === 'On-site');
    } else {
      this.events = events;
    }
    console.log(this.events);
  }
}
