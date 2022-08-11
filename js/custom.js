// JavaScript Document

$(document).ready(function() {
    
    // Get current path and find target link
    var path = window.location.pathname.split("/").pop();
        // Account for home page with empty path
        if ( path == '' ) {
              path = 'index.php';
        }
            
        var target = $('.top-nav ul li a[href="'+path+'"]');
        // Add active class to target link
        target.addClass('active');

    // Get current path and find target link
    
});

// Hamburger menu
$(document).ready(function() {

  var forEach=function(t,o,r){if("[object Object]"===Object.prototype.toString.call(t))for(var c in t)Object.prototype.hasOwnProperty.call(t,c)&&o.call(r,t[c],c,t);else for(var e=0,l=t.length;l>e;e++)o.call(r,t[e],e,t)};

  var hamburgers = document.querySelectorAll(".hamburger");
  if (hamburgers.length > 0) {
    forEach(hamburgers, function(hamburger) {
      hamburger.addEventListener("click", function() {
        this.classList.toggle("is-active");
      }, false);
    });
  }


});
// Hamburger menu

/* Main Slider */
$(document).ready(function() {
    $("#main-slider").owlCarousel({
      goToFirstSpeed: 80,
      slideSpeed : 80,
      autoPlay: true,
      items : 1,
      autoHeight: true,
      navigation: false,
      navigationText: ["‹","›"],
      pagination: true,
      itemsDesktop : [1199,1],
      itemsDesktopSmall : [979,1],
      itemsTablet : [768, 1],
      itemsMobile : [600, 1]
    });
});
  /* Main Slider */

// Parallax Scrolling
$(document).ready(function(){
  $('div[data-type="background"]').each(function(){
    var $bgobj = $(this); // assigning the object

    $(window).scroll(function() {
      var yPos = -($(window).scrollTop() / $bgobj.data('speed')); 
      
      // Put together our final background position
      var coords = '50% '+ yPos + 'px';

      // Move the background
      $bgobj.css({ backgroundPosition: coords });
    }); 
  });    
});
// Parallax Scrolling


/* Testimonials Slider */
$(document).ready(function() {
  $("#testimonials-slider").owlCarousel({
    goToFirstSpeed: 80,
    slideSpeed : 80,
    autoPlay: false,
    items : 1,
    autoHeight: true,
    navigation: false,
    navigationText: ["‹","›"],
    pagination: true,
    itemsDesktop : [1199,1],
    itemsDesktopSmall : [979,1],
    itemsTablet : [768, 1],
    itemsMobile : [600, 1]
  });
});
/* Testimonials Slider */


/* Tours Slider */
$(document).ready(function() {
  $("#tours-slider").owlCarousel({
    goToFirstSpeed: 300,
    slideSpeed : 300,
    autoPlay: false,
    items : 1,
    autoHeight: true,
    navigation: true,
    navigationText: ["‹","›"],
    pagination: false,
    transitionStyle : "fadeUp",
    singleItem : true,
  });
});
/* Tours Slider */

/* page top */
jQuery(document).ready(function($){
	// browser window scroll (in pixels) after which the "back to top" link is shown
	var offset = 300,
		//browser window scroll (in pixels) after which the "back to top" link opacity is reduced
		offset_opacity = 1200,
		//duration of the top scrolling animation (in ms)
		scroll_top_duration = 700,
		//grab the "back to top" link
		$back_to_top = $('.cd-top');

	//hide or show the "back to top" link
	$(window).scroll(function(){
		( $(this).scrollTop() > offset ) ? $back_to_top.addClass('cd-is-visible') : $back_to_top.removeClass('cd-is-visible cd-fade-out');
		if( $(this).scrollTop() > offset_opacity ) { 
			$back_to_top.addClass('cd-fade-out');
		}
	});

	//smooth scroll to top
	$back_to_top.on('click', function(event){
		event.preventDefault();
		$('body,html').animate({
			scrollTop: 0 ,
		 	}, scroll_top_duration
		);
	});

});
/* page top */
