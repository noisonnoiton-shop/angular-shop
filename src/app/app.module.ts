import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms'; // FormsModule 임포트

import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import { ShopComponent } from './content/shop/shop.component';
import { FooterComponent } from './footer/footer.component';
import { SliderComponent } from './slider/slider.component';
import { CategoryComponent } from './content/category/category.component';

import { HttpClientModule } from '@angular/common/http';
import { ClickStopPropagationDirective } from './click-stop-propagation.directive';
import { CommonModule } from '@angular/common';
import { AppRouterModule } from './app.router.module';
import { ContentModule } from './content/content.module';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    ShopComponent,
    FooterComponent,
    SliderComponent,
    CategoryComponent,
    ClickStopPropagationDirective
  ],
  imports: [
    [BrowserModule, FormsModule],
    HttpClientModule,
    CommonModule,
    AppRouterModule,
    ContentModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})

export class AppModule { }
