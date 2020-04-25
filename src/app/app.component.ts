import {Component, ViewChild} from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'blaskosite';

  @ViewChild('sidenav', {static: false}) sidenav;

  toggleSidebar() {
    this.sidenav.toggle();
  }

}
