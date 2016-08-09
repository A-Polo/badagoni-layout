/**
 * Created by GloryManU on 04.07.2016.
 */
(function(){

	var $filter = $('.filter-drop');
    var $filterWrap = $('.filter-drop-wrap');
    var $filterAnimation = $filterWrap.find($filter);

    $filter.hide();

    $filterWrap.click(function(){
        $(this).find($filter).slideToggle('fast');
    });

    if($filterWrap.css('display','block')){
        $filterAnimation.addClass('filter-drop-wrap-active');
    }else{
        $filterAnimation.removeClass('filter-drop-wrap-active');
    }

    $('.brand-slider').lightSlider({
        item: 4,
        controls: false,
        pager: true
    });

    $('body').append('<div id="blackout"></div>');

    var boxWidth = 315;
    var $display = $('html,body');
    var $blackout = $('#blackout');

    function centerBox() {

        var winWidth = $(window).width();
        var winHeight = $(document).height();
        var scrollPos = $(window).scrollTop();
        var disWidth = (winWidth - boxWidth) / 2;
        var disHeight = scrollPos + 150;

        $('.popup-box').css({'width' : boxWidth+'px', 'left' : disWidth+'px', 'top' : disHeight+'px'});
        $('#blackout').css({'width' : winWidth+'px', 'height' : winHeight+'px'});

        return false;
    }

    $(window).resize(centerBox);
    $(window).scroll(centerBox);
    centerBox();

    $('[class*=popup-link]').click(function(e) {

        e.preventDefault();
        e.stopPropagation();
        var name = $(this).attr('class');
        var id = name[name.length - 1];
        var scrollPos = $(window).scrollTop();
        $('#popup-box-'+id).show();
        $blackout.show();
        $display.css('overflow', 'hidden');
        $('html').scrollTop(scrollPos);
    });

    $('[class*=popup-box]').click(function(e) {
        e.stopPropagation();
    });
    $('html').click(function() {
        var scrollPos = $(window).scrollTop();
        $('[id^=popup-box-]').hide();
        $blackout.hide();
        $display.css("overflow","auto");
        $('html').scrollTop(scrollPos);
    });
    $('.close,.popup-btn-back').click(function(e) {
        e.preventDefault();
        var scrollPos = $(window).scrollTop();
        $('[id^=popup-box-]').hide();
        $blackout.hide();
        $display.css("overflow","auto");
        $('html').scrollTop(scrollPos);
    });

    var $top = $('.go-top');
    $(window).scroll(function(){
        display = $(this).scrollTop() >= 200;
    });
    $top.click(function() {
        $('html, body').animate({scrollTop: 0},500);
        return false;
    });
})();