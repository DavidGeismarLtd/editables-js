import MediumEditor from 'medium-editor';
// get all elements that are editable if we have an admin cookie
// add at the top right side a save button
// debugger
document.addEventListener("turbolinks:load", function(event) {
  new MediumEditor('*[data-editablekind="text"]', {
      toolbar: {
          /* These are the default options for the toolbar,
             if nothing is passed this is what is used */
          allowMultiParagraphSelection: true,
          buttons: ['bold', 'italic', 'underline', 'anchor'],
          diffLeft: 0,
          diffTop: -10,
          firstButtonClass: 'medium-editor-button-first',
          lastButtonClass: 'medium-editor-button-last',
          relativeContainer: null,
          standardizeSelectionStart: false,
          static: false,
          /* options which only apply when static is true */
          align: 'center',
          sticky: false,
          updateOnEmptySelection: false
      }
  });
})
