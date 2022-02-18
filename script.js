$(document).ready(function () {
    //Traversing_Up_and_Down_the_DOM_Tree___Challenge
    $("p").click(function () {
        $(this).children("a").css("background-color", "yellow");
    });

    //Traversing Sideways - Challenge 1
    $("button").click(function () {

        $(this).next().slideToggle("slow");
    });

    // Traversing Sideways - Challenge 2
    $('button').click(function () {


        $(this).prev().slideDown();
    });

    $('h2').click(function () {
        //    $(this).first().next().children().first().slideUp(); also works
        $(this).next().children('p').slideUp();
    });
    // other traversing methods challenge 1
    $('#card-btn-1').click(function () {
        $(this).siblings("span").addClass("yellow");

    });

    $('#card-btn-2').click(function () {
        $(this).siblings("#card-par-1").addClass("red");

    });

    $('#card-btn-3').click(function () {
        $(this).siblings().addClass("large-font");

    });
    //-----------challenge 2----------
    $('#card-btn-1').click(function () {
        $("#card p").first().addClass("red");

    });

    $('#card-btn-2').click(function () {

        $("#card p").last().addClass("yellow");



    });

    $('#filter').click(function () {
        $("p").filter(".special").addClass("green");


    });
    //----------challenge 3------------------
    $(".side-heading").click(function () {
        $(".side-heading").siblings().removeClass("highlight");
        $(this).siblings().addClass("highlight");
    });



});