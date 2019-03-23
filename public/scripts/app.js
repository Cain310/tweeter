

$(document).ready(function () {

    function escape(str) {
        var div = document.createElement('div');
        div.appendChild(document.createTextNode(str));
        return div.innerHTML;
    }

    function createTweetElement(tweet) {
        return `<article class="tweet"><header><h3>  ${tweet.user.name}  </h3><div class="avatar"><img src=${tweet.user.avatars.small}></div> <p>${tweet.user.handle}</p ></header > <p>${escape(tweet.content.text)}</p> <footer><p>${tweet.created_at}</p></footer></article > `;
    }

    function renderTweets(tweets) {
        $("section.tweets").empty()
        for (let tweet of tweets) {
            let tweetHtml = createTweetElement(tweet);
            $("section.tweets").prepend(tweetHtml);
        }
    }

    $(".submitTweet").click((event) => {
        event.preventDefault();
        let form = $('.submitForm');
        let formSerial = form.serialize();
        if ($("#countstroke").val().length > 140) {
            ($("#errmess").text("Too Many Characters!!!"));
            ($("#errmess").addClass("negcountercolor"));
        } else if
            ($("#countstroke").val().length <= 0) {
            ($("#errmess").text("Please Enter Something!"));
            ($("#errmess").addClass("negcountercolor"));

        } else {
            $.ajax('/tweets', { method: 'POST', data: formSerial }).then(loadTweets)
        }
    });

    $(".Composer").click(function () {
        $(".new-tweet").toggle("slow", function () {
            $("#countstroke").select();

        })
    });

    function loadTweets() {
        $.ajax('/tweets', { method: 'GET' })
            .done(function (data) {
                renderTweets(data)
            })
    }

    loadTweets()
});