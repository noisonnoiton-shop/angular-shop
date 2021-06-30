import { RouterModule, Routes } from '@angular/router';
import {ShopComponent} from './content/shop/shop.component';
import { BlogComponent } from './content/blog/blog.component';
import { AboutComponent } from './content/about/about.component';
import { ContactComponent } from './content/contact/contact.component';
import { CartComponent } from './content/cart/cart.component';

const AppRoutes: Routes = [
  { path: '', component: ShopComponent, },
  { path: 'index', component: ShopComponent, },
  { path: 'main', component: ShopComponent, },
  { path: 'shop', component: ShopComponent, },
  { path: 'blog', component: BlogComponent, },
  { path: 'about', component: AboutComponent, },
  { path: 'contact', component: ContactComponent, },
  { path: 'shoping-cart', component: CartComponent, },
  { path: '**', redirectTo: '/login', pathMatch: 'full' }, // 잘못된 URL을 사용했을때 Login 페이지로 돌려보냄.
];

export const AppRouterModule = RouterModule.forRoot(AppRoutes, {useHash: true});
