import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  userName = 'Luis Fernando';

  userData = {
    name: 'Luis Fernando',
    age: 24,
    profession: 'Dev Front-end',
    hobbies: 'Films, gameplays, programming'
  }

  title = 'curso-angular-13-hora-de-codar';
}
