import { Component, OnInit } from '@angular/core';
import { MainService } from '../Services/main.service';

@Component({
  selector: 'app-main',
  templateUrl: './main.component.html',
  styleUrls: ['./main.component.css']
})
export class MainComponent implements OnInit {

  constructor(
    private readonly mainService: MainService,
  ) { }
  dataStatistical: any;
  danhmuc: any;
  totalLength: any;
  localStoreUser = true;

  ngOnInit(): void {
    var userlogin = localStorage.getItem('user')
    if (userlogin) {
      this.statistical();
    } else {
      this.localStoreUser = false
      window.location.href = "/dang-nhap";

    }
  }
  statistical() {
    this.mainService.statistical().subscribe((data: any) => {
      this.dataStatistical = data.data;

    })
  }

}
