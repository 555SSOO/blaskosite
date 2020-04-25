import { Component, OnInit } from '@angular/core';
import {Welcome} from '../../core/models/welcome.model';
import {WelcomeItem} from '../../core/content/welcome-item';

@Component({
  selector: 'app-homepage',
  templateUrl: './homepage.component.html',
  styleUrls: ['./homepage.component.scss']
})
export class HomepageComponent implements OnInit {

  welcome: Welcome;

  constructor() { }

  ngOnInit() {
    this.welcome = WelcomeItem.WELCOME_ITEM;
  }

}
