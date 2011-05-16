<?php
/**
 * @file
 * Provides a reaction for the context module.
 */


/**
 * Output context debug information.
 */ 
class context_reaction_re_slideshowbase_includelibraries extends context_reaction {
  /**
   * This function provides the settings form for the given context:
   */
  function options_form($context) {
    $values = $this->fetch_from_context($context);
    $form = array(
      '#tree' => TRUE,
      '#title' => t('RE Slideshow Base Context Settings'),
      'library_name' => array(
        '#type' => 'select',
        '#title' => t('Available libraries'),
        '#description' => t("The libraries in this list are available for use on this site. Only one library can be used per site. For information about creating libraries to extend the base module see the module's !help-page or the !readme-file.", array('!help-page' => l('help page', 'admin/help/re_slideshowbase'), '!readme-file' => l('README file', $path_to_module .'/README.txt'))),
        '#options' => re_slideshowbase_register_libraries(),
        '#default_value' => isset($values['library_name']) ? $values['library_name'] : '',
        '#weight' => 5,
      ),
      'library_only' => array(
        '#type' => 'checkbox',
        '#title' => t('Include Libraries Only'),
        '#description' => t('Forces library modules to include only javascript library files and not their custom javascripts.'),
        '#default_value' => isset($values['library_only']) ? $values['library_only'] : '',
        '#weight' => 10,
      ),
      'library_debug' => array(
        '#type' => 'checkbox',
        '#title' => t('Enable Debug Mode'),
        '#description' => t('In Debug Mode, the slideshow will display a Drupal status message indicating which library module is in use. The message is only visible to users with the "administer re_slideshowbase" permission.'),
        '#weight' => 15,
        '#default_value' => isset($values['library_debug']) ? $values['library_debug'] : '',
      )      
    );
    return $form;
  } // options_form()
  
  
  /**
   * This function provides the specified libraries for the given context:
   */
  function execute() {
    $contexts = context_active_contexts();
    foreach ($contexts as $context) {
      $library_settings = $this->fetch_from_context($context);
      if (!empty($context->reactions['includelibraries'])) {
        re_slideshowbase_load_resources($library_settings, $context);
      }
    }
  } // execute()
} // context_reaction_re_slideshowbase_includelibraries