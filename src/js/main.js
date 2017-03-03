"use strict";

//////////////// ON PAGE LOAD //////////////// 
document.addEventListener("DOMContentLoaded", function() {

  //////////////// Initialise Smooth Scroll //////////////// 
  smoothScroll.init({
    offset: 100,
    updateURL: true,
    callback: function ( toggle, anchor ) { // Function to run after scrolling
      var menuOptions = document.querySelectorAll('.menu ul li');
      var activeMenu = anchor.parentElement;
      
      menuOptions.forEach(function(option) { 
        option.classList.remove('active') 
      });
      activeMenu.classList.add('active');
    }
  });

});

//////////////// Toggle Mobile Menu Icon ////////////////  
var mobilemenu = document.querySelector('.mobile-menu');
var menu = document.querySelector('.menu');
var menuItems = document.querySelectorAll('.menu ul li');

function toogleOpen() {
  document.querySelector('header').classList.toggle('open');
}

function toogleClose() {
  document.querySelector('header').classList.remove('open');
}

function toogleActive() {
  menu.classList.toggle('afteropen');
}
mobilemenu.addEventListener('click', toogleOpen);
mobilemenu.addEventListener('transitionend', toogleActive);

menuItems.forEach(function(item) {
  item.addEventListener('click', toogleClose) 
});

//////////////// IS SCROLL INTO VIEW ////////////////
function isScrolledIntoView(elem) {
  var docViewTop = $(window).scrollTop();
  var docViewBottom = docViewTop + $(window).height();

  var elemTop = $(elem).offset().top;
  var elemBottom = elemTop + $(elem).height();

  return ((elemTop <= docViewBottom) && (elemBottom >= docViewTop));
}

$(window).scroll(function () {
   $('.bounceleft').each(function () {
      if (isScrolledIntoView(this) === true) {
          $(this).addClass('bounceInLeft animated');
      }
   });

   $('.bounceright').each(function () {
      if (isScrolledIntoView(this) === true) {
          $(this).addClass('bounceInRight animated');
      }
   });

   $('.slideleft').each(function () {
      if (isScrolledIntoView(this) === true) {
          $(this).addClass('slideInLeft animated');
      }
   });

   $('.slideright').each(function () {
      if (isScrolledIntoView(this) === true) {
          $(this).addClass('slideInRight animated');
      }
   });

   $('.fadein').each(function () {
      if (isScrolledIntoView(this) === true) {
          $(this).addClass('fadeIn animated');
      }
   });

  $('.count').each(function () {
    var NumberinView = false;
    var final = $(this).data('number');
    
    if (isScrolledIntoView(this) === true) {
      if (NumberinView) { return; }
      NumberinView = true;
      $(this).prop('Counter',0).animate({
          Counter: final
      }, {
          duration: 1000,
          easing: 'swing',
          step: function (now) {
              $(this).text(formatNumber(now));
          }
      });
    } 
  });

});

function formatNumber(num) {
	var numRounded = Math.round(num);
  return numRounded.toString().replace(/(\d)(?=(\d{3})+(?!\d))/g, "$1,")
}