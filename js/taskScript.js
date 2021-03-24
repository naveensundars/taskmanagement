$(document).ready(function () {

    /** tree menu load start**/
    var treeList = $('.menuListInner li ul li');
    if (treeList.length > 0) {
        treeList.parent().parent().addClass('treeNode');
    } else {

    }
    /** tree menu load end**/

    /** tree menu click start**/
    $('.childNode li').click(function () {
        $('.childNode li').removeClass('menuActive');
        $(this).addClass('menuActive');
    })
    /** tree menu click end**/

    /** tree menu accordion start**/
    $('.parentNode').click(function () {
        $('.treeList').removeClass('menuShow');
        $(this).parent().addClass('menuShow');
    })
    /** tree menu accordion end**/


    /** task area start**/
    $('.taskAreaList li').click(function () {
        $('.taskDetails').addClass('showtaskDetails');
        $('.taskAreaList li').removeClass('active');
        $(this).addClass('active');
    })
    /** task area end**/


    /** task tablist start**/
    $('.tabList li').click(function () {
        $('.tabList li').removeClass('active');
        $(this).addClass('active');
    })
    /** task tablist end**/

    /** task tablist start**/
    $('.taskTabHeader li').click(function () {
        $('.taskTabHeader li').removeClass('active');
        $(this).addClass('active');
    })
    /** task tablist end**/
    
});

