import { Component, OnInit } from '@angular/core';
import { SanphamService } from '../Services/sanpham.service';
import { ActivatedRoute } from '@angular/router';
import { FormControl, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-product',
  templateUrl: './product.component.html',
  styleUrls: ['./product.component.css']
})
export class ProductComponent implements OnInit {

  constructor(
    private readonly sanphamService: SanphamService,
    private route: ActivatedRoute,
  ) { }
  display: any = false;
  sanpham: any = [];
  totalLength: any;
  cat_id: any;
  id: any;
  name: any;
  price: any;
  image: any;
  describer: any;
  info: any;
  featured: any;
  PhotoFilePath: any;
  categoryList: any;

  ngOnInit(): void {
    this.getall()
    this.sanphamService.getAllLoaisp().subscribe((data: any) => {
      this.categoryList = data.data;
      this.cat_id=this.cat_id;
    });
    }
  getall() {
    this.sanphamService.GetAll().subscribe((data: any) => {
      this.sanpham = data.data;
      this.totalLength = data.length;
    })
  }
    closeClick() {
    this.display = false;
    this.sanphamService;
   }
   public uploadPhoto(event: any) {
    var file = event.target.files[0];
    const formData: FormData = new FormData();
    formData.append('uploadedFile', file);
    this.sanphamService.UploadPhoto(formData).subscribe((data: any) => {
      this.image = data.toString();
      this.PhotoFilePath = this.sanphamService.PhotoUrl + this.image;
    })
  }
  public add() {
    var val = {
      name: this.name,
      price: this.price,
      describer: this.describer,
      info: this.info,
      featured: this.featured,
      image: this.image,
      cat_id: this.cat_id,

    };
    this.sanphamService.add(val).subscribe((data: any) => {
      location.reload();
    });
  };
  onEdit(id: any): void {
    this.sanphamService
      .getByid(id)
      .subscribe({
        next: (sp) => {
          this.id = sp.data.id;
          this.name = sp.data.name;
          this.price = sp.data.price;
          this.describer = sp.data.describer;
          this.info = sp.data.info;
          this.featured = sp.data.featured;
          this.image = sp.data.image;
          this.cat_id = sp.data.cat_id;
        },

      });
  }
  deleteClick(item: any) {
    if (confirm('Bạn có muốn xóa ??')) {
      this.sanphamService.delete(item.id).subscribe(data => {
        this.getall();
      });
    }
  }
  public update() {
    var val = {
      id: this.id,
      name: this.name,
      price: this.price,
      describer: this.describer,
      info: this.info,
      featured: this.featured,
      image: this.image,
      cat_id: this.cat_id,

    };
    this.sanphamService.update(val).subscribe(res => {
      window.location.reload();
    });
  };
}
