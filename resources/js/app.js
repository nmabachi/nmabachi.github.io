$(document).on('click', '.nav-link', function(event){
  event.preventDefault();

  $('html, body').animate({
    scrollTop: $( $.attr(this, 'href') ).offset().top
  }, 500);
});

function checkScroll(){
    var startY = $('.navbar').height() * 2;
    
    if($(window).scrollTop() > startY){
        $('.navbar').addClass("scrolled");
    }else{
        $('.navbar').removeClass("scrolled");
    }
}

if($('.navbar').length > 0){
    $(window).on("scroll load resize", function(){
        checkScroll();
    });
}