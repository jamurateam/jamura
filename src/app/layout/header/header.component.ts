import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Nav, NAV_MODEL } from 'src/app/models/header';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {
  dataSource: Nav[];
  constructor(
    private router: Router
  ) {
    this.dataSource = NAV_MODEL;
   }

  ngOnInit() {
  }

  onClick(nav: any): void {
    this.router.navigateByUrl(nav.url)
  }


}
