import { Component, OnInit, Output, EventEmitter, Input } from '@angular/core';
import Category from 'src/model/category';
import { Observable } from 'rxjs';
import { CategoryService } from './category.service';
import { ShopService } from '../shop/shop.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-content-category',
  templateUrl: './category.component.html',
  styleUrls: ['./category.component.css']
})
export class CategoryComponent implements OnInit {

  categoryList: Observable<Category[]>;

  filterClicked = false;
  searchClicked = false;
  isActiveAll = true;
  isActive: Array<boolean> = [];

  @Output() outEventEmitter: EventEmitter<number> = new EventEmitter<number>();

  constructor(
    private categoryService: CategoryService
    , private shopService: ShopService
    , public router: Router
    ) { }

  @Input() values: any = {};
  @Input() ngInit;
  ngOnInit() {
    this.getCategoryList();
    if (this.ngInit) { this.ngInit(); }
  }

  getCategoryList() {
    this.categoryList = this.categoryService.getCategory();
  }

  getProductListByCategoryId(categoryId) {

    // arr init;
    this.isActive = [];

    if (categoryId !== '') {
      this.isActiveAll = false;
      this.isActive[categoryId] = true;
      this.shopService.getProductByCategoryIdSub(categoryId);
    } else {
      this.isActiveAll = true;
      this.shopService.getProductAllSub();
    }
  }

  // Function Not Used,,, Test
  onClickFilter() {
    $(this).toggleClass('show-filter');

    $('.panel-filter').slideToggle(400);

    if ($('.js-show-search').hasClass('show-search')) {
      $('.js-show-search').removeClass('show-search');
      $('.panel-search').slideUp(400);
    }
  }
  // Function Not Used,,,
  onClickSearch() {
    $(this).toggleClass('show-search');
    $('.panel-search').slideToggle(400);

    if ($('.js-show-filter').hasClass('show-filter')) {
      $('.js-show-filter').removeClass('show-filter');
      $('.panel-filter').slideUp(400);
    }
  }
}
