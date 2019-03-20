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
            $("#count").addClass("negcountercolor");
        } else {
            $("#count").removeClass("negcountercolor");
        }
    });




    // if $("#count" < 0) {




});

