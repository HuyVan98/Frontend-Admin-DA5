import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CategoryComponent } from './category/category.component';
import { ConmentComponent } from './conment/conment.component';
import { MainComponent } from './main/main.component';
import { ProductComponent } from './product/product.component';
import { UsersComponent } from './users/users.component';
import { OrderComponent } from './order/order.component';
import { LoginComponent } from './login/login.component';
import { SliderComponent } from './slider/slider.component';
import { BannerComponent } from './banner/banner.component';

const routes: Routes = [
  { path: "dang-nhap", component: LoginComponent},
  { path: "", component: MainComponent},
  { path: "danh-sach-quan-tri", component: UsersComponent},
  { path: "danh-sach-don-hang", component: OrderComponent},
  { path: "danh-sach-san-pham", component: ProductComponent},
  { path: "danh-muc", component: CategoryComponent},
  { path: "quan-ly-binh-luan", component: ConmentComponent},
  { path: "danh-muc/:id", component: CategoryComponent },
  { path: "slider", component: SliderComponent },
  { path: "banner", component: BannerComponent },
  
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
