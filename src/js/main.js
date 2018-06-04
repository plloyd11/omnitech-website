$("header").headroom({
    "offset": 205,
    "tolerance": 5,
    "classes": {
        "pinned": "slideInDown",
        "unpinned": "slideOutUp"
    }
});

// to destroy
$("header").headroom("destroy");

// Team hover
(function($) {
    (function() {
        $('.team--individual-img').on('mouseenter', '.team-image', function() {
            var teamName = $(this).data('name');
            $(this).attr('src', '/img/team/' + teamName + '-fun.jpg');
        }).on('mouseleave', '.team-image', function() {
            var teamName = $(this).data('name');
            $(this).attr('src', '/img/team/' + teamName + '.jpg');
        });
    }());
}(jQuery));

// Mobile Menu
$('.mobile-menu-btn').on('click', function() {
    $('.global--main-nav-right').toggleClass('mobile-menu-open');
});

new WOW().init();

// Homepage Slider

$(function() {
    $('.slide').slide({
      isAutoSlide: true,                
      isHoverStop: false,                
      isBlurStop: false,                 
      isShowDots: false,                 
      isShowArrow: true,                
      isHoverShowArrow: true,
      isLoadAllImgs: false,            
      slideSpeed: 5000,
      switchSpeed: 500,
      dotsClass: 'dots',
      dotActiveClass: 'active',
      dotsEvent: 'click',
      arrowClass: 'arrow',
      arrowLeftClass: 'arrow-left',     
      arrowRightClass: 'arrow-right'    
    });
  });

$(function(){
    $('#timeline').timelinev({
        containerDivs:    '.timelineCont',
        dateDiv:         '.date',
        textDiv:         '.text',
        dateHtml:        'h2',
        textHtml:        'p',
        dateActiveClass: '.active',
    });
});