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
      $.re_contextlibraries_buttons({buttonsParent: '#block-views-re-slideshow-block .view-display-id-block > .view-content'});
      $('#block-views-re-slideshow-block .view-display-id-block > .view-content > ul')
        .after('<div id="re-slideshow-view-display-id-block-navigation"/>')  
        .cycle(Drupal.settings.re_jquerycycle);
        
        //We handle the hover event ourselves so we can check if a video is playing
        $('#block-views-re-slideshow-block .view-display-id-block > .view-content > ul').hover(
          function(){ $(this).cycle("pause")},
          function(){
              //Resume the slideshow on hover-out except if there's a video playing videoplayingstate=3
              if( $f().getState() != 3 ){
                              $f().unload();
                $(this).cycle("resume");
              }
          });

    }
  }; /* Drupal.behaviors.re_jquerycycle */
})(jQuery);