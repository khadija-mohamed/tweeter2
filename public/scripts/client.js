$(document).ready(function() {

  $('form').submit(function(event) {
    console.log("Testing submission.");
    event.preventDefault();

    let submission = $('form').serialize();
    $.ajax({
      url: '/tweets/',
      method: 'POST',
      data: submission,
    })
    
    .then(function() {
      $(".tweet-text").val("");
      $(".counter").val("140");
      $('.tweets').empty();
      loadTweets();
    });
  })
});

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
  for (let tweet of tweets) {
    const tweetsData = createTweetElement(tweet);
    $('.tweets').prepend(createTweetElement(tweetsData));
  }
}
const loadTweets = function() {
  $.ajax({
    url: '/tweets/',
    method: 'GET',
    dataType: 'json'
  })
    .then(function(data) {
      renderTweets(data);
  });
};



