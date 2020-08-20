$(document).ready(function(){
    $( window ).scroll(function() {
        $('.top_menu_defult').hide();
        $( ".top_menu_scroll" ).show();
        if($(window).scrollTop() == 0){ 
            $('.top_menu_defult').show();
            $('.top_menu_scroll').hide();
        }
    });
    $('.top_menu_on').click(function(){
        $('.top_menu_on_wrap').show()
    })
    $('.top_menu_close').click(function(){
        $('.top_menu_on_wrap').hide();
    })

    $('.top_menu_on_nav ul li').click(function(){
        $('.top_menu_on_nav ul li').removeClass('on')
        $('.top_menu_on_nav ul li ul').hide()
        $(this).addClass('on')
        $(this).children().show()
    })
})