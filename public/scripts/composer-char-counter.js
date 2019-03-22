// import { format } from "util";

$(document).ready(function () {
    var strokeCount = 140;
    $(".nopaste").bind("copy paste", function (e) {
        e.preventDefault();
    });

    $("#countstroke").keyup(function () {
        let remainingCount = strokeCount - $(this).val().length
        $("#count").text(remainingCount);
        if (remainingCount < 0) {
            $("#count").addClass("negcountercolor")
                // $(".submitTweet").attr("disabled", "disbaled");
                ($("#errmess").addClass("negcountercolor")
                    .text("Too Many Characters!!!"));


        } else {
            $("#count").removeClass("negcountercolor")
            $("#errmess").removeClass("negcountercolor")
            // $(".submitTweet").attr("disabled", false);
        }
    });

    // $("toLong").click(() {
    //     if (strokeCount > strokeCount)
    //     console.log()
    // })



    $("notPresent")




    // if $("#count" < 0) {




});

