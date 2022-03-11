
$(document).ready(function () {

  const loadTweets = function () {
    $.ajax({
      method: 'GET',
      url: '/tweets',
    })
    .then((response) => {
      renderTweets(response);
      $('.tweet-text').val("");
      $(".counter").text(140);
    });
  };
  loadTweets();

  $('.new-tweet-form').on('submit', function (event) {
    event.preventDefault();
    console.log('testing submission')

    const createTweetElement = function (tweet) {
      let time = timeago.format(tweet.created_at);
      let $tweet = 
      $(
        `<article>
          <header>
            <div class="icon"><img src="/images/profile-hex.png"> </div>
            <div class="name">Rosey</div>
            <div class="username">@username</div>
          </header>
          <main class='tweet-content'>
            <span>I have seen further by standing on the shoulder of giants</span>
          </main>
          <footer>
            <div class="time">${time}</div>
            <div class="buttons">
              <span><i class="fa fa-flag" aria-hidden="true"></i></span>
              <span><i class="fa fa-retweet" aria-hidden="true"></i></span>
              <span><i class="fa fa-heart" aria-hidden="true"></i></span>
            </div>
        </section>`)
        
      return $tweet;
    };

    const renderTweets = function (tweets) {
      $(".tweetsSent").empty();
      console.log($('.tweets'));
      for (let tweet of tweets) {
        $('.tweets').prepend(createTweetElement(tweet));
      }
    }
    renderTweets(data);
  })
});  

