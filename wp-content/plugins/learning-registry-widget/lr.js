jQuery(document).ready(function($){
        var lr_post_id = $("#lr_post_id").val();

        if ( lr_post_id >= 0 ) {
                var data = {
                        action: 'lreg_search',
                        post_id: lr_post_id,
                        number_items: $('#lr_number_items').val(),
                        url_field: $('#lr_url_field').val()
                };

                $.post(
                        LR.ajaxurl,
                        data,
                        function( response ) {
				var wid = $("#lr_post_id").parent('.widget-learning_registry');
				$(wid).append(response); 

				// unhide the widget title
				if ( 0 != response.length )
					$(wid).find('.widget-title').show();	
                        }
                );
        }
},(jQuery));
