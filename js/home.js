$(function() {
    $("div").slice(0, 4).show();
    $("#loadMore").on('click', function(e) {
        e.preventDefault();
        $("div:hidden").slice(0, 4).slideDown();
        if ($("div:hidden").length == 0) {
            $("#load").fadeOut('slow');
        }
    });
});
// скролл по якорю
$(document).ready(function() {
    $('a[href^="#"]').click(function() {
        event.preventDefault();
        var el = $(this).attr('href');
        $('body').animate({
            scrollTop: $(el).offset().top - 53
        }, 2000);
        return false;
    });
});
// перелистывание слайдов кнопками
$(document).ready(function() {
    var leftclick = $('.carousel-arrow-left');
    var rightclick = $('.carousel-arrow-right');
    var elementsList = $('.carousel');

    var pixelsOffset = 242;
    var currentLeftValue = 0;
    var elementsCount = elementsList.find('li').length;
    var minimumOffset = -((elementsCount - 6) * pixelsOffset);
    var maximumOffset = 0;

    leftclick.click(function() {
        if (currentLeftValue != maximumOffset) {
            currentLeftValue += 242;
            elementsList.animate({ left: currentLeftValue + "px" }, 500, );
        }
    });

    rightclick.click(function() {
        if (currentLeftValue != minimumOffset) {
            currentLeftValue -= 242;
            elementsList.animate({ left: currentLeftValue + "px" }, 500);
        }
    });
});




// перелистывание слайдов перетаскиванием
$(document).ready(function() {
    $(".car-el-head").mousedown(function() {
        var startX = this.scrollLeft + event.pageX;
        $(".car-el-head").mousemove(function() {
            this.scrollLeft = startX - event.pageX;
            return false;
        });
    });
    $(window).mouseup(function() {
        $(".car-el-head").off("mousemove");
    });
});