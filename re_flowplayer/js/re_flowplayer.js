/**
 * @file
 * This file provides whatever javascript logic and functions are necessary for
 * the flowplayer plugin in the re_slideshow module.
 *
 * Originally developed for use with the re_slideshow feature. You can override
 * this file in the context where the library is invoked.
 *
 * @see http://flowplayer.org/documentation/api/index.html
 */
 

(function($) {
  /**
   * This is the main, 'business', function for this library.
   */
  Drupal.behaviors.re_flowplayer = {
    attach: function(context) {
      var flowplayerSwf = Drupal.settings.basePath + Drupal.settings.re_flowplayer.pathToModule +'/js/flowplayer/flowplayer-3.2.7.swf';
      debug = {
        flowplayerSwf: flowplayerSwf
      };
      console.dir(debug);
      
      jQuery('a.re_video')
        .flowplayer(flowplayerSwf);
      
      //Stop the slideshow if the user clicks on anything
      var slideshow = jQuery('#block-views-re-slideshow-block .view-display-id-block > .view-content > ul');
      slideshow.find('a').bind('click', function(){
          //pause the slideshow. This isn't absolutely necessary but it's just a little added safety
          slideshow.cycle('pause');
          var nextlinks = jQuery('#re-slideshow-view-display-id-block-navigation a, .re_slideshow-prev, .re_slideshow-next')
          nextlinks.bind('click', function(event){
              //moving to a different slide means starting the slideshow and killing the video
              $f().unload();
              nextlinks.unbind(event);
          });
       });   
      //For jquerycycle we're going to need to reactivate the slideshow if we kill it by accident.
    }
    
  }; /* Drupal.behaviors.re_flowplayer */
})(jQuery);
