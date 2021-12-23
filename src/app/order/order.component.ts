import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { OrderService } from '../Services/order.service';
@Component({
  selector: 'app-order',
  templateUrl: './order.component.html',
  styleUrls: ['./order.component.css']
})
export class OrderComponent implements OnInit {

  constructor(
    private route: ActivatedRoute,
    private readonly orderService: OrderService
  ) { }
  orders: any = [];
  listOrderShow: any = [];
  ngOnInit(): void {
    this.getall();
  }
  getall() {
    this.orderService.GetAll().subscribe((data: any) => {
      this.orders = data.data;
    })
  }
  changeStatus(id: any): void {
    this.orderService
      .getByid(id)
      .subscribe({
        next: (sp) => {
           location.reload();
        },

      });
  }
  showOrder(id: any): void {
    this.orderService
      .showOrderByid(id)
      .subscribe({
        next: (sp) => {
          this.listOrderShow=sp.data
          console.log(this.listOrderShow);
          
        },

      });
  }

}
