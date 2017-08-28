// Author: Simon Lachaîne

$(function () {
    // define variables
    var $body, $title, $paragraphs;
    $body = $("body");
    $title = $("h1");
    $paragraphs = $("p");

    // hide paragraphs before showing everything
    $paragraphs.hide();
    $body.addClass("show_body");

    // upon clicking the title, show the first paragraph
    $title.on("click", function (e) {
        e.preventDefault();
        $body.removeClass("k_back").addClass("w_back");
        $paragraphs.first().slideDown();
    });

    // upon clicking each paragraph, show the next one
    $paragraphs.on("click", function (e) {
        e.preventDefault();
        var $this = $(this);
        $this.next().slideDown();
    });

    // upon clicking the last paragraph, play sound and change background
    $paragraphs.last().on("click", function (e) {
        e.preventDefault();
        $paragraphs.slideUp();
        $body.removeClass("w_back").addClass("k_back");
        var audio = $("audio")[0];
        audio.play();
    });
});