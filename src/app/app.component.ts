import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {

  constructor(public router: Router) { }

  isHomeRoute() {
    let isHome = false;
    if (this.router.url === '/index' ||
        this.router.url === '/main' ||
        this.router.url === '/') {
          isHome = true;
        }
    return isHome;
  }

}
