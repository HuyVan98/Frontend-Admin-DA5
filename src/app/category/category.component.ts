import { Component, OnInit } from '@angular/core';
import { DanhMucService } from '../Services/danhmuc.service';

@Component({
  selector: 'app-category',
  templateUrl: './category.component.html',
  styleUrls: ['./category.component.css']
})
export class CategoryComponent implements OnInit {

  id: any;
  name: any;
  danhmuc: any = [];
  totalLength: any;
  display: any = false;
  tenloai: any;
  localStoreUser = true;
  constructor(
    private readonly danhmucService: DanhMucService,
  ) { }
  ngOnInit(): void {
    var userlogin = localStorage.getItem('user')
    if (userlogin) {
      this.getall();
    } else {
      this.localStoreUser = false
      window.location.href = "/dang-nhap";
      
    }
  }
  getall() {
    this.danhmucService.GetAll().subscribe((data: any) => {
      this.danhmuc = data.data;
      this.totalLength = data.length;
    })
  }
  onEdit(id: any): void {
    this.danhmucService
      .getByid(id)
      .subscribe({
        next: (dmuc) => {
          // console.log(dmuc.data)
          this.id = dmuc.data.id;
          this.name = dmuc.data.name;
        },
      });
  }
   closeClick() {
    this.display = false;
    this.danhmucService;
   }
  add() {
    var val = {
      id: this.id,
      name: this.name,
    };
    this.danhmucService.add(val).subscribe((data: any) => {
      location.reload();
    })
  }
  update(){
    var val = {
      id: this.id,
      name: this.name,
    };
    console.log(val)
    this.danhmucService.update(val).subscribe((data: any) => {
      location.reload();
    })
  }
  deleteClick(item: any) {
    console.log(item)
    if (confirm('Bạn có muốn xóa không ??')) {
      this.danhmucService.delete(item.id).subscribe(data => {
        this.getall();
      });
    }
  }
}
