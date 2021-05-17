$('.open_menu').click(function () {
    $('#side').animate({
        right: 0
    });
    /*
    #wrap의 포지션을 fixed로 바꿈
    사이트 영역의 스크롤과 #wrap영역의 스크롤이 이중으로 만들어지기 때문에
    */
    $('.wrap').css({
        position: 'fixed'
    });
    return false;
});
$('.s_close').click(function () {
    $('#side').animate({
        right: '-100%'
    });
    /*
        #wrap의 포지션을 기본으로 돌려놓기
    */
    $('.wrap').css({
        position: 'relative'
    });
    return false;
});

$('.s_gnb .d1 .m1').click(function () {
    var i = $(this).siblings('.sub').css('display');
    if (i == 'block') {
        $('.s_gnb .d1 .sub').slideUp();
        $('.s_gnb .d1 .m1').removeClass('on');
    }
    else {
        $('.s_gnb .d1 .sub').slideUp();
        $(this).siblings('.sub').slideDown();
        $('.s_gnb .d1 .m1').removeClass('on');
        $(this).addClass('on');
    }
    return false;
});