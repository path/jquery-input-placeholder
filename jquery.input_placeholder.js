(function($){
  
  $.input_placeholder = function() {
    $('input[data-placeholder]').each(function(){

      var input = $(this);

      // Build container
      var container = $('<div><span>' + $(input).attr('data-placeholder') + '</span></div>');
      $(container).css('position','relative');
      
      var placeholder = $(container).find('span');

      // Position placeholder
      $(placeholder).css('position','absolute');
      // The 2 extra pixels account for the cursor
      var left = parseInt($(input).css('padding-left')) + 2 + parseInt($(input).css('margin-left')) + parseInt($(input).css('border-left-width'));
      $(placeholder).css('left', left);
      var top = parseInt($(input).css('padding-top')) + parseInt($(input).css('margin-top')) + parseInt($(input).css('border-top-width'));
      $(placeholder).css('top', top);

      // Style placeholder
      $(placeholder).css('font-size', $(input).css('font-size'));
      $(placeholder).css('font-family', $(input).css('font-family'));
      
      // Disable selection
      $(placeholder).css('user-select','none').css('-moz-user-select','none').css('-webkit-user-select','none');    
      
      // Hide placeholder if its been prepopulated
      if ($(input).val().length > 0) {
        $(placeholder).hide();
      }

      // Insert the container into the dom
      $(input).after(container);
      $(input).appendTo(container);
      
      // Add the placeholder class so it can be styled
      $(placeholder).addClass('placeholder');

      // Focus on input if placeholder is clicked
      $(placeholder).click(function(){
        $(input).focus();
      });
      
      // Interval, detect all changes to input
      var input_value = $(input).val();
      setInterval(function(){
        if ($(input).val() != input_value) {
          if ($.trim($(input).val()).length == 0) {
            $(this).val('');
            $(placeholder).show();
          } else {
            $(placeholder).hide();
          }
          input_value = $(input).val();
        }
      }, 50);

    });
  }
  
})(jQuery);
