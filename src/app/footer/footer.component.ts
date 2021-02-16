import { Component, OnInit } from '@angular/core';
import * as $ from 'jquery';

@Component({
  selector: 'app-footer',
  templateUrl: './footer.component.html',
  styleUrls: ['./footer.component.css']
})
export class FooterComponent implements OnInit {

  windowH = $(window).height() / 2;

  constructor() { }

  ngOnInit() {
    this.backToTop();
  }

  backToTop() {
    const aThis = this;
    $(window).on('scroll', function() {
        if ($(this).scrollTop() > aThis.windowH) {
            $('#myBtn').css('display', 'flex');
        } else {
            $('#myBtn').css('display', 'none');
        }
    });

    $('#myBtn').on('click', function() {
        $('html, body').animate({scrollTop: 0}, 300);
    });
  }
}
