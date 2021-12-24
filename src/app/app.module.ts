import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { HttpClient, HttpClientModule } from '@angular/common/http';
import { AppComponent } from './app.component';
import { MainComponent } from './main/main.component';
import { ProductComponent } from './product/product.component';
import { CategoryComponent } from './category/category.component';
import { LayoutComponent } from './layout/layout.component';
import { UsersComponent } from './users/users.component';
import { ConmentComponent } from './conment/conment.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { OrderComponent } from './order/order.component';
import { LoginComponent } from './login/login.component';



@NgModule({
  declarations: [
    AppComponent,
    MainComponent,
    ProductComponent,
    CategoryComponent,
    LayoutComponent,
    UsersComponent,
    ConmentComponent,
    OrderComponent,
    LoginComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule,
     ReactiveFormsModule,
  ],

  providers: [],
  bootstrap: [AppComponent]
})

export class AppModule { }
