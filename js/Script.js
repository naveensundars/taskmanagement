$(document).ready(function () {
    //filpbook start
    $('.flipButton').click(function () {
        $(this).closest(".bookGridInner").toggleClass("bookFlip");
    });
    //filpbook start
    //list and grid  start
    $('.listStyle li').click(function () {
        $('.listStyle li,.bookViewScreen').removeClass('active');
        var className = $(this).attr('class');
        $('.' + className + '').addClass('active');
        if (className == 'listView') {
            $('.bookViewScreen').addClass('active');
        }
    })
    //list and grid  start
    //accordion start
    var acc = document.getElementsByClassName("accordion");
    var i;

    for (i = 0; i < acc.length; i++) {
        acc[i].addEventListener("click", function () {
            this.classList.toggle("active");
            var panel = this.nextElementSibling;
            if (panel.style.maxHeight) {
                panel.style.maxHeight = null;
            } else {
                panel.style.maxHeight = panel.scrollHeight + "px";
            }
        });
    }
    //login password 
    $('.passwordIcons').click(function () {
        $(this).toggleClass('hide');
        if ($('#Password').attr("type") === "text") {
            $('#Password').attr("type", "password");
        } else {
            $('#Password').attr("type", "text");
        }

    });
    //accordion end
    $('#tocTable, #ChaptersTable, #UsersTable, #InstructionsTable, #FilesTable').DataTable({
        "paging": false,
        "info": false,
        language: { search: '', searchPlaceholder: "Search..." },
        "stripeClasses": [],
        fixedHeader: true,
        scrollY: '45vh',
        scrollX: true,
        scrollCollapse: true,
    });

});