/**
 * Simple ui component; hides and shows textfield depending on the value of a
 * checkbox in the same form.
 */
Drupal.behaviors.contextReactionIncludeLibraries = function(context) {
  // We need to find the checkbox and input field concerned:
  $libraryOnlyCheckbox = $('#edit-reactions-plugins-includelibraries-library-only');
  $libraryCustomField = $('#edit-reactions-plugins-includelibraries-library-custom');
  // We'll also want the parent of the custom field (we sacrifice chaining below
  // to use this so as not to repeatedly call .parent()):
  $libraryCustomFieldParent = $libraryCustomField.parent();
  // Hide the field initially if it is disabled:
  if ($libraryCustomField.is(':disabled')) {
    $libraryCustomFieldParent.hide();
  }
  // Now, attach an onchange behavior to the checkbox:
  $libraryOnlyCheckbox.change(function(){
    if ($libraryCustomField.is(':disabled')) { // If the textfield is disabled when the checkbox changes (handled in php)...
      // Enable it and show the field and its parent and siblings:
      $libraryCustomField.removeAttr('disabled');
      $libraryCustomFieldParent.show('slow'); 
    }
    else { // If the textfield is NOT disabled when the checkbox changes...
      // Disable it and hide the parent element:
      $libraryCustomField.attr('disabled', 'disabled');
      $libraryCustomFieldParent.hide('slow');
    }
  });
}; /* Drupal.behaviors.contextReactionIncludeLibraries */