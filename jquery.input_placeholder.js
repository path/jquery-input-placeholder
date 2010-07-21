/*
* Input Placeholder 1.1 - jQuery Plugin
*
* Copyright 2010, Graham Blache, Dan Dofter
* Dual licensed under the MIT or GPL Version 2 licenses.
*/
(function($){
  
  $.fn.inputPlaceholder = function() {
    return this.each(function(){
      $(this).find('input[data-placeholder]').each(function(){
        var $input = $(this);

        var $container = $('<div><span>' + $input.attr('data-placeholder') + '</span></div>');
        $container.css('position','relative');

        var $span = $container.find('span');

        $span.css({
          'position': 'absolute', 
          'left': $input.css('padding-left'),
          'top': $input.css('padding-top'),
          'font-size': $input.css('font-size'),
          'font-family': $input.css('font-family'),
          'user-select': 'none',
          '-moz-user-select': 'none',
          '-webkit-user-select': 'none'
        });

        if ($input.val().length > 0) {
          $container.find('span').hide();
        }

        $input.after($container);
        $input.appendTo($container);

        $span.addClass('placeholder');

        $span.click(function(){
          $input.focus();
        });

        var input_value = $input.val();
        setInterval(function(){
          if ($input.val() != input_value) {
            if ($input.val().length == 0) {
              $(this).val('');
              $container.find('span').show();
            } else {
              $container.find('span').hide();
            }
            input_value = $input.val();
          }
        }, 50);
      });
    });
  };
  
})(jQuery);
