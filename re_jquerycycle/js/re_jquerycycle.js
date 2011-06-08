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
Drupal.behaviors.re_jquerycycle = function(context) {
  $.re_contextlibraries_buttons({buttonsParent: '#block-views-re_slideshow-block_1 .view-display-id-block_1 > .view-content'});
  $('#block-views-re_slideshow-block_1 .view-display-id-block_1 > .view-content > ul')
    .after('<div id="re_slideshow-view-display-id-block_1-navigation"/>')  
    .cycle({
      fit: true,
  		fx: 'scrollVert',
  		height: 400,
  		next: '.re_slideshow-next',
  		pager: '#re_slideshow-view-display-id-block_1-navigation',
  		pause: true,
  		pauseOnPagerHover: true,
  		prev: '.re_slideshow-prev'
  	});
} /* Drupal.behaviors.re_jquerycycle */