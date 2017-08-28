// Author: Simon Lachaîne

$(function () {
    // define variables
    var $static, $body, $title, $paragraphs;
    $static = STATIC_URL;
    $body = $("body");
    $title = $(".well-lg");
    $paragraphs = $(".well").not(".well-lg");

    // hide paragraphs before showing everything
    $paragraphs.hide();
    $body.css({
        "display": "inline"
    });

    // upon clicking the title, show the first paragraph
    $title.on("click", function (e) {
        e.preventDefault();
        var $default_back = 'white url('+$static+'carte/images/asanoha.png)';
        $body.css({
            "background": $default_back
        });
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
        var $kitty_back = 'white url('+$static+'carte/images/kittens.jpg) no-repeat center';
        $body.css({
            "background": $kitty_back,
            "background-size": "contain"
        });
        var audio = $("audio")[0];
        audio.play();
    });
});