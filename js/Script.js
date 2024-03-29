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
    // var acc = document.getElementsByClassName("accordion");
    // var i;

    // for (i = 0; i < acc.length; i++) {
    //     acc[i].addEventListener("click", function () {
    //         this.classList.toggle("active");
    //         var panel = this.nextElementSibling;
    //         if (panel.style.maxHeight) {
    //             panel.style.maxHeight = null;
    //         } else {
    //             panel.style.maxHeight = panel.scrollHeight + "px";
    //         }
    //     });
    // }
    $('.accordion').click(function () {
        $(this).toggleClass('active');
        $(this).closest('.accordionGroup').toggleClass('active');
    });
    //accordion end
    //login password 
    $('.passwordIcons').click(function () {
        $(this).toggleClass('hide');
        if ($('#Password').attr("type") === "text") {
            $('#Password').attr("type", "password");
        } else {
            $('#Password').attr("type", "text");
        }

    });

    $('.applicationBtn').click(function () {
        $(this).toggleClass('active');
    });
    
    var MenuImg =$(".menuArea ul li a img");
    MenuImg.parent().parent().addClass('ShowMenu');

    
    $('#tocTable, #ChaptersTable, #UsersTable, #InstructionsTable, #FilesTable, #AssignuserTable').DataTable({
        "paging": false,
        "info": false,
        language: { search: '', searchPlaceholder: "Search..." },
        "stripeClasses": [],
        fixedHeader: true,
        scrollY: '45vh',
        scrollX: true,
        scrollCollapse: true,
    });

    $('.startTask').click(function () {
        $(".logisticsArea").addClass('taskStart');
    });

    $('.cancelTask').click(function () {
        $(".logisticsArea").removeClass('taskStart');
    });

    $('#dragTableOne, #dragTableTwo').DataTable({
        "paging": false,
        "info": false,
        searching: false,
        "stripeClasses": [],
        fixedHeader: true,
        scrollX: true,
        scrollCollapse: true,
    });
    $('#fixedColumn').DataTable({
        "paging": false,
        scrollY: "100px",
        "info": false,
        searching: false,
        "stripeClasses": [],
        fixedHeader: true,
        scrollX: true,
        scrollCollapse: true,
        fixedColumns: {
            leftColumns: 2
        }
    });
    var taskHeight = $('.taskRight').height();
    var calcHeightOne = $('.timeSoltList').height() + 325;
    var CalcSetHeight = taskHeight - calcHeightOne;
    $('.divTable').css('max-height', CalcSetHeight + 'px');
    $('.divTable').css('min-height', CalcSetHeight + 'px');

    //drag
    var $tabs = $('#dragTableTwo');
    $("tbody.connectedSortable")
        .sortable({
            connectWith: ".connectedSortable",
            //  items: "> tr:not(:first)",
            appendTo: $tabs,
            helper: "clone",
            zIndex: 999990
        })
        .disableSelection();


       
});
$(window).on('resize', function () {
    var taskHeight = $('.taskRight').height();
    var calcHeightOne = $('.timeSoltList').height() + 325;
    var CalcSetHeight = taskHeight - calcHeightOne;
    $('.divTable').css('max-height', CalcSetHeight + 'px');
    $('.divTable').css('min-height', CalcSetHeight + 'px');
});

