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
          slideshow.cycle('stop');
          var nextlinks = jQuery('re-slideshow-view-display-id-block-navigation a, .re_slideshow-prev, .re_slideshow-next')
          nextlinks.bind('click', function(event){
              //starting the slideshow means killing the video
              $f().unload();
              //restarting jQuerycycle rebuilds the pager so let's lose the one we've got
              jQuery('#re-slideshow-view-display-id-block-navigation').empty();
              slideshow.cycle(Drupal.settings.re_jquerycycle);

              //console.log('loading')}
              //Once performed, unbind the event from itself.
              nextlinks.unbind(event);
          });
       });   
      //For jquerycycle we're going to need to reactivate the slideshow if we kill it by accident.
    }
    
  }; /* Drupal.behaviors.re_flowplayer */
})(jQuery);
