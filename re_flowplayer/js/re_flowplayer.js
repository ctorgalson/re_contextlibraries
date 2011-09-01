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
      jQuery('a[href*=".mp4"], a[href*=".flv"]')
        .flowplayer(flowplayerSwf);
    }
  }; /* Drupal.behaviors.re_flowplayer */
})(jQuery);