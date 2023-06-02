import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent {
  newName = '';

  names = ['Binsha', 'Adhil Khan', 'Jibin Althaf', 'Mubashira'];

  addName(newName: string) {
    this.names.push(newName);
  }
}
