<?php
// $Id$

/**
 * @file
 * Provides a reaction for the context module.
 */


/**
 * Output available libraries, configuration options for the current context.
 */
class context_reaction_re_contextlibraries_includelibraries extends context_reaction {
  /**
   * This function provides the settings form for the given context:
   */
  function options_form($context) {
    $path_to_module = drupal_get_path('module', 're_contextlibraries');
    // Include ui elements:
    drupal_add_js($path_to_module . '/js/contextReactionIncludeLibraries.js', 'module');
    $values = $this->fetch_from_context($context);
    $form = array(
      '#tree' => TRUE,
      '#title' => t('RE Context Libraries Context Settings'),
      'library_name' => array(
        '#type' => 'select',
        '#title' => t('Available libraries'),
        '#description' => t("The libraries in this list are available for use in this context. For information about creating libraries to extend the base module see the module's !help-page or the !readme-file.", array('!help-page' => l(t('help page'), 'admin/help/re_contextlibraries'), '!readme-file' => l(t('README file'), $path_to_module . '/README.txt'))),
        '#options' => re_contextlibraries_register_libraries(),
        '#default_value' => isset($values['library_name']) ? $values['library_name'] : '',
        '#size' => 5,
        '#multiple' => TRUE,
        '#weight' => 5,
      ),
      'library_only' => array(
        '#type' => 'checkbox',
        '#title' => t('Include Libraries Only'),
        '#description' => t('Force this library module to include only javascript library files and not its custom javascripts. This setting is useful when custom javascript function calls are provided in the theme layer.'),
        '#default_value' => $values['library_only'] == 1 ? $values['library_only'] : 0,
        '#weight' => 10,
      ),
      'library_custom' => array(
        '#type' => 'textfield',
        '#title' => t('Include Custom File'),
        '#description' => t('If "Include Libraries Only" is set (above), you may provide the path (relative to the directory in which Drupal is running) to an alternate file provided by a theme or another module. If present in the path, "%t" will be substituted with the path to the theme in use when this context is active.'),
        '#default_value' => $values['library_only'] == 1 ? $values['library_custom'] : '',
        '#disabled' => $values['library_only'] == 1 ? FALSE : TRUE,
        '#weight' => 15,
      ),
      'library_debug' => array(
        '#type' => 'checkbox',
        '#title' => t('Enable Debug Mode'),
        '#description' => t('In Debug Mode, the context will display a Drupal status message indicating which library module is in use. The message is only visible to users with the "administer re_contextlibraries" permission.'),
        '#weight' => 20,
        '#default_value' => isset($values['library_debug']) ? $values['library_debug'] : '',
      )
    );
    return $form;
  } // options_form()


  /**
   * This function provides the specified libraries for the given context:
   */
  function execute() {
    //$contexts = context_active_contexts();
    $contexts = context_enabled_contexts();
    foreach ($contexts as $context) {
      $library_settings = $this->fetch_from_context($context);
      if (!empty($context->reactions['includelibraries'])) {
        re_contextlibraries_load_resources($library_settings, $context);
      }
    }
  } // execute()
} // context_reaction_re_contextlibraries_includelibraries