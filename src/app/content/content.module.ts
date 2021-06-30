import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { BlogComponent } from './blog/blog.component';
import { AboutComponent } from './about/about.component';
import { ContactComponent } from './contact/contact.component';
import { CartComponent } from './cart/cart.component';

@NgModule({
  declarations: [BlogComponent, AboutComponent, ContactComponent, CartComponent],
  imports: [
    CommonModule
  ]
})
export class ContentModule { }
