/**
 * @file
 * This file provides whatever javascript logic and functions are necessary for
 * the jquery cycle plugin in the re_slideshowbase module.
 *
 * @see http://malsup.com/jquery/cycle/options.html
 * @todo Make menu-builder into plugin, move it to parent module js, add it to 
 *       function in jquerytools_tabs.module
 */
Drupal.behaviors.re_jquerytools_tabs = function(context) {
  // Build a menu:
  $viewItems = $('#block-views-re_slideshowbase-block_1 .view-display-id-block_1 > .view-content > ul > li');
  $navList = $('<div id="re_slideshowbase-view-display-id-block_1-navigation"></div>');
  $viewItems.hide().each(function(i, e) { // Start looping through items to build the nav, and make sure all items are hidden!
    $navList.append($('<a href="#">'+ (i + 1) +'</a>'));
  });
  $viewItems.parents('.view-content').append($navList);
  // Now, instantiate the tabs/slideshow:
  $('#re_slideshowbase-view-display-id-block_1-navigation')
    .tabs($viewItems, {
      effect: 'fade', // Enable "cross-fading" effect...
      fadeInSpeed: 1000,
      fadeOutSpeed: 1000,
      rotate: true // Start from the beginning after the last tab...
    })
    .slideshow({ // Use the slideshow plugin. It accepts its own configuration...
      autoplay: true,
      interval: 4000
    });
} /* Drupal.behaviors.re_jquerytools_tabs */