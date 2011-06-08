/**
 * @file
 * This file provides whatever javascript logic and functions are necessary for
 * the jquery cycle plugin in the re_slideshow module.
 *
 * Originally developed for use with the re_slideshow feature. You can override
 * this file in the context where the library is invoked.
 *
 * @see http://flowplayer.org/tools/tabs/index.html#api
 */
 

/**
 * This is the main, 'business', function for this library.
 *
 * @see $.re_jquerytools_tabs_menu
 */
Drupal.behaviors.re_jquerytools_tabs = function(context) {
  // Get the selector:
  var $viewItems = $('#block-views-re_slideshow-block_1 .view-display-id-block_1 > .view-content > ul > li');
  // Build a menu and append it at an appropriate location:
  $viewItems.parents('.view-content').append($.re_contextlibraries_menu());
  // Do likewise with prev/next buttons:
  $.re_contextlibraries_buttons({buttonsParent: '#block-views-re_slideshow-block_1 .view-display-id-block_1 > .view-content'});
  // Now, instantiate the tabs/slideshow:
  $('#re_slideshow-view-display-id-block_1-navigation')
    .tabs($viewItems, {
      effect: 'fade', // Enable "cross-fading" effect...
      fadeInSpeed: 1000,
      fadeOutSpeed: 1000,
      rotate: true // Start from the beginning after the last tab...
    })
    .slideshow({ // Use the slideshow plugin. It accepts its own configuration...
      autoplay: true,
      interval: 4000,
      next: '.re_slideshow-next',
      prev: '.re_slideshow-prev'
    });
}; /* Drupal.behaviors.re_jquerytools_tabs */