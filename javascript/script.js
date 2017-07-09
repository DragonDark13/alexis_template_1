jQuery(document).ready(function($) {

	// var myWidth = 0;
 //        myWidth = window.innerWidth;
 //        jQuery('body').prepend('<div id="size" style="background:#000;padding:5px;position:fixed;z-index:9999;color:#fff;">Width = '+myWidth+'</div>');
 //        jQuery(window).resize(function(){
 //            var myWidth = 0;
 //            myWidth = window.innerWidth;
 //            jQuery('#size').remove();
 //            jQuery('body').prepend('<div id="size" style="background:#000;padding:5px;position:fixed;z-index:9999;color:#fff;">Width = '+myWidth+'</div>');
 //        });


   // viewportChecker animate

  jQuery('.about .image_container, .text_container.left, .top_post, .tool.left').viewportChecker({

        classToAdd: 'animated fadeInLeft',

  });

  jQuery('.about .text, .text_container.right, .single_post, .tool.right').viewportChecker({

        classToAdd: 'animated fadeInRight',
        

  });

  jQuery('.service, .portfolio_container, .single_member_inner_container,.how_we_work .image_container, .single_package>*, .single_feature>*, .member_details').viewportChecker({

        classToAdd: 'animated zoomIn',

  });


  jQuery('.call , .content>.my_btn, .tool.bottom, .button_container').viewportChecker({

        classToAdd: 'animated fadeInUp',
  });


  jQuery('.stat_container>*').viewportChecker({
      classToAdd: 'animated zoomIn', 

      callbackFunction: function(elem, action){

          elem.closest('.stat_counter').addClass('active').spincrement({

            from: 0,                
            to: null,              
            decimalPlaces: 0,       
            duration: 3000 ,
            leeway: 10,
                complete: function (e) {
                e.text( e.text() + " +")
                }

          });

      }

  });

    /* Responsive meni */

  jQuery(".navbar-toggle").click(function(event) {
      /* Act on the event */

          if (jQuery(this).hasClass('collapsed')) {

          jQuery(".navbar-default").addClass('js_response_meni').next(".main_container").addClass('js_response_hide');
          } 

          else {

          jQuery(".navbar-default").removeClass('js_response_meni').next(".main_container").removeClass('js_response_hide');
          }

    });

    // easy scroll

  jQuery('.main_meni  a').click(function(){
    var target = jQuery(this).attr('href');
    jQuery('html, body').animate({scrollTop: jQuery(target).offset().top}, 1000);
    return false;
  });

});