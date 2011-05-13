RE SLIDESHOW BASE README.txt
--------------------------------------------------------------------------------

NOTES


This module can work with, but does not require the RE Slideshow feature. The 
javascript and css files provide with the module assume it will be used, but can
be easily overridden in standard Drupal themes.


INSTALLATION


1.  To install the module, move it into one of Drupal's standard module director-
    ies such as sites/all/modules and enable it from the Modules administration
    page at admin/build/modules.

2.  Enable at least one library module from the Modules administration page.


CONFIGURATION


1.  Visit the RE Slideshow Base administration page at admin/settings/re_slideshowbase
    and select the library module to be used.


USING THE MODULE WITH THE RE SLIDESHOW FEATURE:


The RE Slideshow Feature module provides a block, context, a Views preprocess
function and a debug setting. If the feature is enabled and your theme includes
a region called "Pre Content", the block should appear on the front page and
the slideshow should work as soon as step 1 under "Configuration" (above) has
been performed.

If your theme does not include a region called "Pre Content", edit the context
provided by the RE Slideshow feature "re_slideshowbase_homepage" or enable the
block "re_slideshowbase: Block (main slideshow)" in your own context or enable
it in the blocks administration page.


USING THE MODULE WITH YOUR OWN VIEWS AND THEME


This section assumes some experience with Drupal themes and theme customization
and experience writing your own javascript and CSS.

In the Drupal context, a slideshow is probably most easily built from a view or
from a multiple CCK field.

1.  Install and configure the module as above, but make sure that the checkbox
    labelled "Include Libraries Only" is checked.

2.  In your theme's template.php file, call re_slideshowbase_load_resources().
    (Note: this should probably be called from one of the preprocess functions,
    but which one you use depends on circumstances specific to your site and
    theme).
    
    Test to make sure that all of the library module's javascript and CSS files
    (if any) are present in the page source where you expect them.
    
3.  Copy the module's custom javascript file (this is the file in the module's
    "js" directory named "modulename.js") to your theme's root directory.
        
4.  In your theme's .info file, add this new custom javascript file to the theme
    by adding a line like "scripts[] = modulename.js" (not including quota-
    tion marks). 
    
    Test your slideshow page again to make sure that the custom javascript file
    is coming from your theme.
    
5.  Customize the copy of the javascript file in the theme to suit the markup you
    will be using it with (the provided custom javascript files include a comment
    indicating where the particular library's API documentation can be found).
    
6.  (Optional). You can override the CSS files provided by the RE Slideshow Base
    module and library modules by adding lines to your theme's .info file like
    "styles[] = re_slideshowbase.css" or "styles[] = modulename.css" (without
    quotation marks). If these lines are present, and no such file is found in
    the theme, the modules' CSS files won't be included in the page! (This is
    standard Drupal theme behaviour).


CREATING LIBRARY MODULES


Required Files and Directories:

A library module for the RE Slideshow Base module should include the following
files and directories. In this section, we assume name of the library module is
"module_name".

module_name

  All of the module files should be contained in this directory.

  js
    
    this directory should contain all the javascript files intended for use
    in the module; one of the files should be named module_name.js
    
    
  css
  
    this directory should contain all the css files intended for use in the
    module; usually this directory will contain one file named module_name.css
    
    
  module_name.info
  
    this should be a standard Drupal module info file and should look almost
    exactly like this--adjust name, description and version as necessary:
    
      ;$Id$

      name = 'RE jQuery Cycle'
      description = 'Provides the Module Name javascript library and styles to the RE Slideshow Base module.'
      package = 'Raised Eyebrow Custom Modules'
      dependencies[] = re_slideshowbase
      core = 6.x
      php = 5.2
      version = 6.x-1.0
      
      
  module_name.module
  
    the module file needs only to implement hook_define_re_slideshowbase_library()
    function; it should look like this:
    
      <?php
      /**
       * @file
       * Provides the Module Name javascript library and styles to the RE Slideshow
       * Base module.
       */
      
      
      /**
       * Implementation of hook_define_re_slideshowbase_library()
       */
      function module_name_define_re_slideshowbase_library() {
        $path_to_module = drupal_get_path('module', 'module_name');
        $library = array(
          're_module_name' => array(
            'name' => 'jQuery Cycle (provided by: module_name)',
            'js' => array(
              $path_to_module .'/js/module_name_library.js',
              $path_to_module .'/js/module_name.js',
            ),
            'css' => array(
              $path_to_module .'/css/module_name.css',
            ),
          ),
        );
        return $library;
      } // module_name_define_re_slideshowbase_library()
 
 
  module_name.install
  
    the install file runs functions when the library module is installed or
    uninstalled; for library modules they chiefly need to set or unset Drupal\
    variables:
    
      <?php
      /**
       * @file
       * Performs any 'first run' or 'last run' operations necessary for the module.
       * In this case, sets Drupal variables required to use the module on install,
       * removes them on uninstall.
       */
      
      
      /**
       * Implementation of hook_install().
       */
      function module_name_install() {
        $library = module_invoke('module_name', 'define_re_slideshowbase_library');
      } // module_name_install()
      
      
      /**
       * Implementation of hook_uninstall().
       */
      function module_name_uninstall() {
        variable_del('re_slideshowbase:module_name');
      } // module_name_uninstall()