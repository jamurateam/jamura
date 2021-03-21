import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { LayoutRoutingModule } from './layout-routing.module';
import { LayoutComponent } from './layout.component';
import { HeaderComponent } from './header/header.component';
import { ApiModule } from '../@core/api/api.module';
import { environment } from 'src/environments/environment';
import { BannerComponent } from './banner/banner.component';
import { CarouselModule } from 'ngx-owl-carousel-o';
import { ProductsComponent } from './products/products.component';

@NgModule({
  declarations: [LayoutComponent, HeaderComponent,
  BannerComponent,
  ProductsComponent
],
  imports: [
    CommonModule,
    LayoutRoutingModule,
    CarouselModule
  ]
})
export class LayoutModule { }
