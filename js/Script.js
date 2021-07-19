$( document ).ready(function() {
    $('.flipButton').click(function(){
        $(this).closest(".bookGridInner").toggleClass("bookFlip");
    })
});