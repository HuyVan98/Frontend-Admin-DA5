import { Component, OnInit } from '@angular/core';
import { BannerService } from '../Services/banner.service';

@Component({
  selector: 'app-banner',
  templateUrl: './banner.component.html',
  styleUrls: ['./banner.component.css']
})
export class BannerComponent implements OnInit {

  constructor( private readonly bannerService: BannerService,) { }
  id: any;
  image: any;
  banners: any = [];
  PhotoFilePath: any;
  localStoreUser = true;
  display: any = false;
  files: any[];
  ngOnInit(): void {
    var userlogin = localStorage.getItem('user')
    if (userlogin) {
      this.getall()
    } else {
      this.localStoreUser = false
      window.location.href = "/dang-nhap";
    }
  }
  getall() {
    this.bannerService.GetAll().subscribe((data: any) => {
      this.banners = data;
      console.log(data);
      
    })
  }
  public add() {
    var val = {
      image: this.image,

    };
    this.bannerService.add(val).subscribe((data: any) => {
      location.reload();
    });
  };
  public uploadPhoto(event: any) {
    // var file = event.target.files[0];
    // const formData: FormData = new FormData();
    // formData.append('uploadedFile', file);
    // this.bannerService.UploadPhoto(formData).subscribe((data: any) => {
    //   this.image = data.toString();
    //   this.PhotoFilePath = this.bannerService.PhotoUrl + this.image;
    // })
    this.files = event.target.files;
    
    console.log(this.files);
    
  }
  onEdit(id: any): void {
    this.bannerService
      .getByid(id)
      .subscribe({
        next: (sp) => {
          this.id = sp.id;
          this.image = sp.image;
        },

      });
  }
   deleteClick(item: any) {
    if (confirm('Bạn có muốn xóa ??')) {
      this.bannerService
        .delete(item.id).subscribe(data => {
        this.getall();
      });
    }
   }
  public update() {
    var val = {
      id: this.id,
      image: this.files,
    
      
    };
    this.bannerService.update(val).subscribe(res => {
      window.location.reload();
    });
  };
  closeClick() {
    this.display = false;
    this.bannerService;
   }

}
