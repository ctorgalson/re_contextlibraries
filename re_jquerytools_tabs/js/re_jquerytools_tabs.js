/**
 * @file
 * This file provides whatever javascript logic and functions are necessary for
 * the jquery cycle plugin in the re_slideshowbase module.
 *
 * @see http://malsup.com/jquery/cycle/options.html
 */
Drupal.behaviors.re_jquerytools_tabs = function(context) {
  // Build a menu:
  $viewItems = $('#block-views-re_slideshowbase-block_1 .view-display-id-block_1 > .view-content > ul > li');
  $navList = $('<div id="re_slideshowbase-view-display-id-block_1-navigation"></div>');
  $viewItems.each(function(i, e) {
    $navList.append($('<a href="#">'+ (i + 1) +'</a>'));
  });
  $viewItems.parents('.view-content').append($navList);

  $('#re_slideshowbase-view-display-id-block_1-navigation').tabs('#block-views-re_slideshowbase-block_1 .view-display-id-block_1 > .view-content > ul > li', {
    // enable "cross-fading" effect
    effect: 'fade',
    fadeOutSpeed: 'slow',
    // start from the beginning after the last tab
    rotate: true
    // use the slideshow plugin. It accepts its own configuration
  }).slideshow({
    autoplay: true
  });
} /* Drupal.behaviors.re_jquerytools_tabs */