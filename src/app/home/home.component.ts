import { Component } from '@angular/core';
import { cards } from "../cards";
import { icards } from "../icards";




@Component({
  selector: 'home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})



export class HomeComponent {
  cards:icards[] = cards;


}
