


$(document).ready(function () {

    function escape(str) {
        var div = document.createElement('div');
        div.appendChild(document.createTextNode(str));
        return div.innerHTML;
    }

    function createTweetElement(tweet) {

        return `<article class="tweet"><header><h3>  ${tweet.user.name}  </h3><div class="avatar"><img src=${tweet.user.avatars.small}></div> <p>${tweet.user.handle}</p ></header > <p>${escape(tweet.content.text)}</p> <footer><p>${tweet.created_at}</p></footer></article > `;

    }

    // const data = [
    //     {
    //         "user": {
    //             "name": "Newton",
    //             "avatars": {
    //                 "small": "https://vanillicon.com/788e533873e80d2002fa14e1412b4188_50.png",
    //                 "regular": "https://vanillicon.com/788e533873e80d2002fa14e1412b4188.png",
    //                 "large": "https://vanillicon.com/788e533873e80d2002fa14e1412b4188_200.png"
    //             },
    //             "handle": "@SirIsaac"
    //         },
    //         "content": {
    //             "text": "If I have seen further it is by standing on the shoulders of giants"
    //         },
    //         "created_at": 1461116232227
    //     },
    //     {
    //         "user": {
    //             "name": "Descartes",
    //             "avatars": {
    //                 "small": "https://vanillicon.com/7b89b0d8280b93e2ba68841436c0bebc_50.png",
    //                 "regular": "https://vanillicon.com/7b89b0d8280b93e2ba68841436c0bebc.png",
    //                 "large": "https://vanillicon.com/7b89b0d8280b93e2ba68841436c0bebc_200.png"
    //             },
    //             "handle": "@rd"
    //         },
    //         "content": {
    //             "text": "Je pense , donc je suis"
    //         },
    //         "created_at": 1461113959088
    //     },
    //     {
    //         "user": {
    //             "name": "Johann von Goethe",
    //             "avatars": {
    //                 "small": "https://vanillicon.com/d55cf8e18b47d4baaf60c006a0de39e1_50.png",
    //                 "regular": "https://vanillicon.com/d55cf8e18b47d4baaf60c006a0de39e1.png",
    //                 "large": "https://vanillicon.com/d55cf8e18b47d4baaf60c006a0de39e1_200.png"
    //             },
    //             "handle": "@johann49"
    //         },
    //         "content": {
    //             "text": "Es ist nichts schrecklicher als eine tätige Unwissenheit."
    //         },
    //         "created_at": 1461113796368
    //     }
    // ];



    function renderTweets(tweets) {
        $("section.tweets").empty()
        for (let tweet of tweets) {
            let tweetHtml = createTweetElement(tweet);
            $("section.tweets").prepend(tweetHtml);
        }
    }
    // const safeHTML = `<p>${escape(textFromUser)}</p>`
    // renderTweets(data)



    $(".submitTweet").click((event) => {
        event.preventDefault();
        let form = $('.submitForm');
        let formSerial = form.serialize();
        if ($("#countstroke").val().length > 140) {
            ($("#errmess").text("Too Many Characters!!!"));
            ($("#errmess").addClass("negcountercolor"));
        } else if
            ($("#countstroke").val().length <= 0) {
            $("#errmess").removeClass("negcountercolor")
            // console.log(formSerial.length)
            alert("Please Enter Something!");
        } else {
            $.ajax('/tweets', { method: 'POST', data: formSerial }).then(loadTweets)
        }
    })

    $(".Composer").click(function () {
        $(".new-tweet").toggle("slow", function () {
            $("#countstroke").select();
            // console.log('hello')
            // Animation complete.
        });
    });



    function loadTweets() {
        $.ajax('/tweets', { method: 'GET' })
            .done(function (data) {
                renderTweets(data)

            })
    }

    loadTweets()
});