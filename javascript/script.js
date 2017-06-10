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

        jQuery('.about .image_container, .text_container.left, .top_post, .tool.left').viewportChecker({

              classToAdd: 'animated fadeInLeft',
              // repeat: true,

        });

        jQuery('.about .text, .text_container.right, .single_post, .tool.right').viewportChecker({

              classToAdd: 'animated fadeInRight',
              // repeat: true,

        });

        jQuery('.service, .portfolio_container, .single_member_inner_container, .stat_container>*,.how_we_work .image_container, .single_package>*, .single_feature>*, .member_details').viewportChecker({

              classToAdd: 'animated zoomIn',
              // repeat: true,

        });

        jQuery('.call , .content>.my_btn, .tool.bottom, .button_container').viewportChecker({

              classToAdd: 'animated fadeInUp',
              // repeat: true,
        });



	
});