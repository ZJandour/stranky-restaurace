(function($){
    $(function(){

       /****** scroll to section *****/

        $(".jq--scroll-our-food").click(function(){
            $("html, body").animate({scrollTop: $ (".jq--our-food").offset().top}, 1000);
        });

        $(".jq--scroll-food-info").click(function(){
            $("html, body").animate({scrollTop: $ (".jq--food-info").offset().top}, 1500);
        });

        $(".jq--scrooll-referenc").click(function(){
            $("html, body").animate({scrollTop: $ (".jq--referenc").offset().top}, 1500);
        });

        $(".jq--scroll-photogalery").click(function(){
            $("html, body").animate({scrollTop: $ (".jq--photogalery").offset().top}, 1500);
        });

        $(".jq--scroll-contact").click(function(){
            $("html, body").animate({scrollTop: $ (".jq--contact").offset().top}, 1500);
        });

        /****** scroll buttons to section *****/
        $(".jq--scroll-button-first").click(function(){
            $("html, body").animate({scrollTop: $ (".jq--food-info").offset().top}, 1500);
        });

        $(".jq--scroll-button-second").click(function(){
            $("html, body").animate({scrollTop: $ (".jq--contact").offset().top}, 1500);
        });

        /****** mobil navigation *****/

        $(".jq--nav-icon").click(function(){
            $(".nav-background").slideToggle();
            $(".mobile-nav-back").fadeToggle();
            $("nav ul").fadeToggle();
        
        });
        
        $(".jq--image-hamburger").click(function(){
  
            if($(".jq--image-hamburger").attr("src") == "images/menu.png")
            {
                $($(".jq--image-hamburger").attr("src","images/close.png"));
            } 
            else 
            {
                $($(".jq--image-hamburger").attr("src","images/menu.png"));
            }  
        });
 

});
})(jQuery);