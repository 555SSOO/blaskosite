import { Component, OnInit } from '@angular/core';
import {CvItem} from '../../core/models/cv-item.model';
import {HobbiesItems} from '../../core/content/hobbies-items';

@Component({
  selector: 'app-contact',
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.scss']
})
export class ContactComponent implements OnInit {

  hobbiesCvItems: CvItem[];

  constructor() { }

  ngOnInit() {
    this.hobbiesCvItems = HobbiesItems.CV_HOBBIES_ITEMS;
  }

}
