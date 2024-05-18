$('.top > ul').children('li:eq(1)').click(function(){
    $('.map ').children('iframe:eq(0)').css({
        display:"block"
    })
    $('.map ').children('iframe:eq(1)').css({
        display:"none"
    })
    $('.map ').children('iframe:eq(2)').css({
        display:"none"
    })
})
$('.top > ul').children('li:eq(2)').click(function(){
    $('.map ').children('iframe:eq(0)').css({
        display:"none"
    })
    $('.map ').children('iframe:eq(1)').css({
        display:"block"
    })
    $('.map ').children('iframe:eq(2)').css({
        display:"none"
    })
})
$('.top > ul').children('li:eq(3)').click(function(){
    $('.map ').children('iframe:eq(0)').css({
        display:"none"
    })
    $('.map ').children('iframe:eq(1)').css({
        display:"none"
    })
    $('.map ').children('iframe:eq(2)').css({
        display:"block"
    })
})