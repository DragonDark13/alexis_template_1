jQuery(document).ready(function($) {

	var myWidth = 0;
        myWidth = window.innerWidth;
        jQuery('body').prepend('<div id="size" style="background:#000;padding:5px;position:fixed;z-index:9999;color:#fff;">Width = '+myWidth+'</div>');
        jQuery(window).resize(function(){
            var myWidth = 0;
            myWidth = window.innerWidth;
            jQuery('#size').remove();
            jQuery('body').prepend('<div id="size" style="background:#000;padding:5px;position:fixed;z-index:9999;color:#fff;">Width = '+myWidth+'</div>');
        });

        jQuery('.about .image_container, .text_container.left').viewportChecker({

              classToAdd: 'animated fadeInLeft',
              repeat: true,

        });

        jQuery('.about .text, .text_container.right').viewportChecker({

              classToAdd: 'animated fadeInRight',
              repeat: true,

        });

        jQuery('.service, .portfolio_container, .single_member_inner_container, .stat_container>*,.how_we_work .image_container, .single_package>*, .single_feature>*').viewportChecker({

              classToAdd: 'animated zoomIn',
              repeat: true,

        });
	
});