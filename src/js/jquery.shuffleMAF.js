/*
** Name         : jquery.shuffleMAF
** Requirements : jquery library [ min version 1.11.1 ]
** Version      : 1.10.2
** Github repo  : https://github.com/mohssineAboutaj/jquery.shuffleMAF
** Author       : Mohssine Aboutaj
** Contact      : mohssineaboutajtemplates@gmail.com
*/

(function ( $ ) {
  $.fn.shuffleMAF = function(options) {

    "use strict";

    return this.each(function(){

      var shuffleMAF = $(this);

      // define default options
      var settings = $.extend({
        effect: 'fade',
        time: 700,
        classActive: 'shuffle-active'
      }, options);

      console.log(settings);

      // on click event
      shuffleMAF + $(" .shuffle-nav li").on("click", function() {


/*

        // add class active on this and remove from others
        $(this).addClass(classActive).siblings().removeClass(classActive);

        // check if this is first btn
        if ($(this).is(":first-child")) {
          if (effect === "fade") {
            shuffleMAF + $(" .shuffle-content .shuffle-item").fadeIn(time);
          } else if (effect === "opacity") {
            shuffleMAF + $(" .shuffle-content .shuffle-item").animate({
              opacity: 1
            }, time);
          } else {
            shuffleMAF + $(" .shuffle-content .shuffle-item").fadeIn(time)
          }
        } else { // check if this is not first btn
          if (effect === "fade") {
            shuffleMAF + $(" .shuffle-content .shuffle-item").fadeOut(time);
            shuffleMAF + $(" .shuffle-content .shuffle-item." + $(this).data("filter")).fadeIn(time);
          } else if (effect === "opacity") {
            shuffleMAF + $(" .shuffle-content .shuffle-item").animate({
              opacity: .1
            }, time);
            shuffleMAF + $(" .shuffle-content .shuffle-item." + $(this).data("filter")).animate({
                opacity: 1
            }, time);
          } else {
            shuffleMAF + $(" .shuffle-content .shuffle-item").fadeOut(time);
            shuffleMAF + $(" .shuffle-content .shuffle-item." + $(this).data("filter")).fadeIn(time);
          }
        }

*/

      });
    });
  }
}( jQuery ));