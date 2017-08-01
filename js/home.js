$(document).ready(function(){
	$('.topbutton').click( function(){ 
		var scroll_el = $(this).attr('anchor'); 
		if ($(scroll_el).length != 0) { 
		$('html, body').animate({ scrollTop: $(scroll_el).offset().top }, 5000); 
		}
		return false; 
	});
});

$(document).ready(function() {
    var leftclick = $('.carousel-arrow-left');
    var rightclick = $('.carousel-arrow-right');
	var elementsList = $('.carousel');
 
	var pixelsOffset = 245;
    var currentLeftValue = 0;
	var elementsCount = elementsList.find('li').length;
    var minimumOffset = - ((elementsCount - 6) * pixelsOffset);
    var maximumOffset = 0;
	
    leftclick.click(function() {
		if (currentLeftValue != maximumOffset) {
			currentLeftValue += 245;
			elementsList.animate({ left : currentLeftValue + "px"}, 500);
		}
    });
 
    rightclick.click(function() {
		if (currentLeftValue != minimumOffset) {
			currentLeftValue -= 245;
			elementsList.animate({ left : currentLeftValue + "px"}, 500);
		}
    });
 
});	
	