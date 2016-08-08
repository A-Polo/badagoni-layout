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
})();