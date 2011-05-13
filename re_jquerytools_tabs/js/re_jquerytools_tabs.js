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
  // Get the selector:
  var $viewItems = $('#block-views-re_slideshowbase-block_1 .view-display-id-block_1 > .view-content > ul > li');
  // Build a menu and append it at an appropriate location:
  $viewItems.parents('.view-content').append($.re_slideshowbase_menu());
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