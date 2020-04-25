import { Component, OnInit } from '@angular/core';
import {CvItem} from '../../core/models/cv-item.model';
import {FaqItems} from '../../core/content/faq-items';

@Component({
  selector: 'app-faq',
  templateUrl: './faq.component.html',
  styleUrls: ['./faq.component.scss']
})
export class FaqComponent implements OnInit {

  panelOpenState = false;

  faqItems: CvItem[];

  constructor() { }

  ngOnInit() {
    this.faqItems = FaqItems.FAQ_ITEMS;
  }

}
