$(document).ready(function () {

  $('.tweetsSent').on('submit', function(event){
    event.preventDefault();
  })

const data = [
  {
    "user": {
      "name": "Newton",
      "avatars": "https://i.imgur.com/73hZDYK.png"
      ,
      "handle": "@SirIsaac"
    },
    "content": {
      "text": "If I have seen further it is by standing on the shoulders of giants"
    },
    "created_at": 1461116232227
  },
  {
    "user": {
      "name": "Descartes",
      "avatars": "https://i.imgur.com/nlhLi3I.png",
      "handle": "@rd" },
    "content": {
      "text": "Je pense , donc je suis"
    },
    "created_at": 1461113959088
  }
]

const renderTweets = function(tweets) {

  for (let tweet of tweets) {
    $('.tweets').prepend(createTweetElement(tweet))}
}

const createTweetElement = function(tweet) {
let $tweet = $(`<section class="tweets">
<article>
  <header>
    <div class="icon"><img src="/images/profile-hex.png"> </div>
    <div class="name">Rosey</div>
    <div class="username">@username</div>
  </header>
  <main class='tweet-content'>
    <span>I have seen further by standing on the shoulder of giants</span>
  </main>
  <footer>
    <div class="time">10 days ago</div>
    <div class="buttons">
      <span><i class="fa fa-flag" aria-hidden="true"></i></span>
      <span><i class="fa fa-retweet" aria-hidden="true"></i></span>
      <span><i class="fa fa-heart" aria-hidden="true"></i></span>
    </div>
</section>`)
return $tweet;
};

renderTweets(data);

}); 
