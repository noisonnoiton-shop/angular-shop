import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import * as $ from 'jquery';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {

  posWrapHeader;
  searchHeaderClassStr: string;
  isHome: boolean;

  constructor(public router: Router) { }

  ngOnInit() {
    this.fixHeader();
    this.isHomeRoute();
  }

  isHomeRoute() {
    this.isHome = true;
    if (this.router.url === '/index' ||
        this.router.url === '/main' ||
        this.router.url === '/') {
          this.isHome = false;
    }

    return this.isHome;
  }

  toggleActiveMenu(selIdx) {
    const aThis = this;
    $('.main-menu > li').each(function(i) {
      if (selIdx === i) {
        $(this).addClass('active-menu');
      } else {
        $(this).removeClass('active-menu');
      }
    });
  }

  // var arrowMainMenu = $('.arrow-main-menu-m');

  // for(var i=0; i<arrowMainMenu.length; i++){
  //     $(arrowMainMenu[i]).on('click', function(){
  //         $(this).parent().find('.sub-menu-m').slideToggle();
  //         $(this).toggleClass('turn-arrow-main-menu-m');
  //     })
  // }

  /*==================================================================
  [ Show / hide modal search ]*/

  onClickShowModal() {
    // $('.modal-search-header').addClass('show-modal-search');
    this.searchHeaderClassStr = 'show-modal-search';
  }

  onClickHideModal() {
    // $('.modal-search-header').removeClass('show-modal-search');
    this.searchHeaderClassStr = '';
  }

  /* ==================
  [ Fixed Header ]
  ===================== */
  fixHeader() {
    if ($('.top-bar').length > 0) {
      this.posWrapHeader = $('.top-bar').height();
    } else {
      this.posWrapHeader = 0;
    }

    if ($(window).scrollTop() > this.posWrapHeader) {
      $('.container-menu-desktop').addClass('fix-menu-desktop');
      $('.wrap-menu-desktop').css('top', 0);
    } else {
      $('.container-menu-desktop').removeClass('fix-menu-desktop');
      $('.wrap-menu-desktop').css('top', this.posWrapHeader - $(this).scrollTop());
    }

    const aThis = this;
    $(window).on('scroll', function () {
      if ($(this).scrollTop() > aThis.posWrapHeader) {
        $('.container-menu-desktop').addClass('fix-menu-desktop');
        $('.wrap-menu-desktop').css('top', 0);
      } else {
        $('.container-menu-desktop').removeClass('fix-menu-desktop');
        $('.wrap-menu-desktop').css('top', aThis.posWrapHeader - $(this).scrollTop());
      }
    });
  }

}
