import { Component, OnInit } from '@angular/core';
declare var $: any; //使用jQuery

@Component({
  selector: 'scdm-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {

  constructor() { }

  ngOnInit() {
    $('.carousel').carousel();
    
    var navbar = document.getElementById("navbar");
    var nh = 650;
    window.onscroll = function() {
        var s = document.body.scrollTop || document.documentElement.scrollTop;
        if (s > nh) {
            $(".my-navbar").addClass("top-nav navbar-fixed-top");
        } else {
            $(".my-navbar").removeClass("top-nav navbar-fixed-top");
            //navbar.className = "navbar navbar-static-top";
        };
    };
  }

}
