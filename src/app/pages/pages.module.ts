import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {HomepageComponent} from './homepage/homepage.component';
import { ExperienceComponent } from './experience/experience.component';
import { ContactComponent } from './contact/contact.component';
import { AboutComponent } from './about/about.component';
import { FaqComponent } from './faq/faq.component';
import {SharedModule} from '../shared/shared.module';
import {MatButtonModule, MatExpansionModule, MatGridListModule, MatIconModule, MatListModule, MatTreeModule} from '@angular/material';



@NgModule({
  declarations: [
    HomepageComponent,
    ExperienceComponent,
    ContactComponent,
    AboutComponent,
    FaqComponent
  ],
  imports: [
    CommonModule,
    SharedModule,
    MatGridListModule,
    MatListModule,
    MatTreeModule,
    MatIconModule,
    MatButtonModule,
    MatExpansionModule
  ]
})
export class PagesModule { }
