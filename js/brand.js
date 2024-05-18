$(document).ready(function(){
    var box_x = $('.box').width() ;
    var win_w = $(window).width() * 0.01;
    var win_h = $(window).height() ; 
    tmp();

    $('.box').hover(function(){ 
        $('.box').css({transition: 'clip 0.5s'})
        $(this).css({
            clip: 'rect(0px, '+box_x+'px, '+win_h+'px, 0px)'
        })
        if($(this).index() < $('.box').length - 1) {
            $(this).next().css({
                clip: 'rect(0px, '+(box_x)+'px, '+win_h+'px, '+(win_w * 2.5 * 2)+'px)'
                
            })
        }
    }, function(){
        tmp();
    });

    function tmp() {
        $('.box').css({
            clip: 'rect(0px, '+box_x+'px, '+win_h+'px, '+(win_w * 3)+'px)'
        }   )
        $('.box').eq(0).css({
            clip: 'rect(0px, '+box_x+'px, '+win_h+'px, '+(win_w * 0)+'px)'
        }   )
        $('.box').eq(2).css({
            clip: 'rect(0px, '+box_x+'px, '+win_h+'px, '+(win_w * 3)+'px)'
        }   )
    }

    $(window).resize(function(){
        $('.box').css({transition: 'none'})
        box_x = $('.box').width() ;
        win_w = $(window).width() * 0.01;
        win_h = $(window).height() ; 
        tmp();
    })
});