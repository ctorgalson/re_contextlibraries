/**
 * @file
 * This file provides default javascript tools that can be used by child library
 * modules. Library modules determine whether or not this file is included.
 */

(function($){  
 /**
  * This function builds, and returns, a generic menu based on the items in a
  * list.
  */
 $.re_contextlibraries_menu = function(options) {  
    var defaults = {
          slideSelector: '#block-views-re_contextlibraries-block_1 .view-display-id-block_1 > .view-content > ul > li',
          navItemParent: '<div id="re_contextlibraries-view-display-id-block_1-navigation" class="foo" />',
          navItem: '<a href="#" />'
        },
        options = $.extend(defaults, options),
        $navElement = $(options.navItemParent),
        $slides = $(options.slideSelector).each(function(i, e){
          $navElement.append($(options.navItem).text(i + 1));
        });
      return $navElement;
 };
 /* $.re_contextlibraries_menu */  
})(jQuery);