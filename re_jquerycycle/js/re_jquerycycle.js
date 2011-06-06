/**
 * @file
 * This file provides whatever javascript logic and functions are necessary for
 * the jquery cycle plugin in the re_contextlibraries module.
 *
 * Originally developed for use with the re_slideshow feature. You can override
 * this file in the context where the library is invoked.
 *
 * @see http://malsup.com/jquery/cycle/options.html
 */
(function ($) {
  Drupal.behaviors.re_jquerycycle = {
    attach: function(context) {
      $('#block-views-re-slideshow-block .view-display-id-block > .view-content > ul')
        .after('<div id="re-slideshow-view-display-id-block-navigation"/>')  
        .cycle({
    		  fx: 'scrollVert',
    		  height: 400,
    		  pager: '#re-slideshow-view-display-id-block-navigation',
    		  pause: true,
    		  pauseOnPagerHover: true
    	 });
    }
  }; /* Drupal.behaviors.re_jquerycycle */
})(jQuery);