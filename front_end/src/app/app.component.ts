import { Component } from '@angular/core';
import { HardcodedAuthenticationService } from './service/hardcoded-authentication.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'Employee Management Web Application';
  isUserLoggedIn: boolean = false;
  whichUser: String = "dummy";

  constructor(public hardcodedAuthenticationService: HardcodedAuthenticationService) { }

  ngOnInit() {
    this.isUserLoggedIn = this.hardcodedAuthenticationService.isUserLoggedIn();
    // this.whichUser = this.hardcodedAuthenticationService.currentUser();
  }

}
