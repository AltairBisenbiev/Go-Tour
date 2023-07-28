import { Component } from '@angular/core';
import {ActivatedRoute, Router, RouterModule} from "@angular/router";

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent {
  constructor(private router: Router) {
  }

  goHome(url: String) {
    this.router.navigate([url])
  }
}