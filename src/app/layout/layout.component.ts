import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-layout',
  templateUrl: './layout.component.html',
  styleUrls: ['./layout.component.css']
})
export class LayoutComponent implements OnInit {

  constructor() { }
  localStoreUserLogin=false;
  ngOnInit(): void {
    var userlogin = localStorage.getItem('user')
    if (userlogin) {
      this.localStoreUserLogin=true
    }
  }

}
