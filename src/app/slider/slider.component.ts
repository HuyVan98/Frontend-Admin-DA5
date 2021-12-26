import { Component, OnInit } from '@angular/core';
import { SliderService } from '../Services/sllider.service';

@Component({
  selector: 'app-slider',
  templateUrl: './slider.component.html',
  styleUrls: ['./slider.component.css']
})
export class SliderComponent implements OnInit {
  constructor(
    private readonly sliderService: SliderService,
  ) { }
  id: any;
  image: any;
  sliders: any = [];
    PhotoFilePath: any;
  localStoreUser = true;
    display: any = false;
  
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
    this.sliderService.GetAll().subscribe((data: any) => {
      this.sliders = data;
      console.log(data);
      
    })
  }
  public add() {
    var val = {
      image: this.image,

    };
    this.sliderService.add(val).subscribe((data: any) => {
      location.reload();
    });
  };
  public uploadPhoto(event: any) {
    var file = event.target.files[0];
    const formData: FormData = new FormData();
    formData.append('uploadedFile', file);
    this.sliderService.UploadPhoto(formData).subscribe((data: any) => {
      this.image = data.toString();
      this.PhotoFilePath = this.sliderService.PhotoUrl + this.image;
    })
  }
  onEdit(id: any): void {
    this.sliderService
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
      this.sliderService
        .delete(item.id).subscribe(data => {
        this.getall();
      });
    }
   }
  public update() {
    var val = {
      id: this.id,
      image: this.image,
    };
    this.sliderService.update(val).subscribe(res => {
      window.location.reload();
    });
  };
  closeClick() {
    this.display = false;
    this.sliderService;
   }

}
