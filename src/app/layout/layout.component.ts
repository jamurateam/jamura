import { Component, OnInit } from '@angular/core';
import { CommonServiceService } from '../services/common-service.service';

@Component({
  selector: 'app-layout',
  templateUrl: './layout.component.html',
  styleUrls: ['./layout.component.scss']
})
export class LayoutComponent implements OnInit {

  constructor(
    private apiService: CommonServiceService
  ) { }

  ngOnInit(): void {
    this.getWebsiteDetails();
    document.documentElement.style.setProperty('--header-background-color', '#000000');
    document.documentElement.style.setProperty('--header-font-color', '#fff');
  }


  getWebsiteDetails(){
    this.apiService.getWebsiteDetails().subscribe( data => {
      console.log(data);
    }, error => {
      console.log(error);
    })

  }

}
