/**
 * @file
 * This file provides utility functions that may be useful to library modules.
 * Library modules decide whether or not this file should ever be included.
 *
 * Originally developed for use with the re_slideshow feature.
 */

(function ($) {
  /**
   * This function builds, and returns, a generic menu based on the items in a
   * list.
   *
   * @param object options The configuration options fo the function:
   *
   *    * string slideSelector Selector for individual slides in a slideshow
   *    * string navItemParent Element ready for jquery creation, e.g.
   *      <div id="foo" /> or <div></div> etc
   *    * string navItem Element ready for jquery creation, e.g. <a /> etc
   * @todo Make wrapping available for navItem
   */
  $.re_contextlibraries_menu = function(options) {  
    var defaults = {
          slideSelector: '#block-views-re_slideshow-block_1 .view-display-id-block_1 > .view-content > ul > li',
          navItemParent: '<div id="re_slideshow-view-display-id-block_1-navigation" />',
          navItem: '<a href="#" />'
        },
        options = $.extend(defaults, options),
        $navElement = $(options.navItemParent);
    $(options.slideSelector).each(function(i, e){
      $navElement.append($(options.navItem).text(i + 1));
    });
    return $navElement;
  };
  /* $.re_contextlibraries_tabs_menu */
})(jQuery);