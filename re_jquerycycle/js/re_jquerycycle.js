/**
 * @file
 * This file provides whatever javascript logic and functions are necessary for
 * the jquery cycle plugin in the re_slideshowbase module.
 *
 * @see http://malsup.com/jquery/cycle/options.html
 */
Drupal.behaviors.re_jquerycycle = function(context) {
  $('#block-views-re_slideshowbase-block_1 .view-display-id-block_1 > .view-content > ul')
    .after('<div id="re_slideshowbase-view-display-id-block_1-navigation"/>')  
    .cycle({
  		fx: 'scrollVert',
  		height: 400,
  		pager: '#re_slideshowbase-view-display-id-block_1-navigation',
  		pause: true,
  		pauseOnPagerHover: true
  	});
} /* Drupal.behaviors.re_jquerycycle */