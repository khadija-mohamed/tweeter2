// loops through tweets
// calls createTweetElement for each tweet
// takes return value and appends it to the tweets container
const renderTweets = function(tweets) {
  $('.tweets').empty();
  for (const tweet of tweets) {
    const value = createTweetElement(tweet);
    $('.tweets').prepend(value)
  }
}

// creation of mock HTML with javascript template strings 
const createTweetElement = function(tweet) {
let $tweet = `
<article id="tweet">
<header class="tweet-header">
<img src="${tweet.user.avatars}">
<h2 class="username">${escape(tweet.user.name)}</h2>
<span class="handle">${escape(tweet.user.handle)}</span>
</header>
<section>
  <p>${escape(tweet.content.text)}</p>
  </section>
  <footer class="tweet-footer">
  <span>${timeago.format(tweet.created_at)}</span>
  <div class="tweet-footer-icons">
  <i class="fas fa-flag"></i>
  <i class="fas fa-retweet"></i>
  <i class="fas fa-heart"></i>
  </div>
</footer>
</article>
`
return $tweet;
};

//form submission with JQuery, serialize()function to send to server as query string
//event listener added which prevents refresh of page upon clicking the button/submitting tweet
//.empty() function to clear tweets after submitted.

const postTweets = function(event) {
  $(".tweetsSent").submit(function(event) {
  event.preventDefault();
  $('.errors').slideUp(400).text('');

  if (!$(this).children().find('textarea').val()) {
    return $('.errors').text("⚠️⚠️⚠️This tweet is empty, please add more characters.⚠️⚠️⚠️").slideDown();
  }
  if ($(this).children().find('textarea').val().length > 140) {
    return $('.errors').text("⚠️⚠️⚠️This tweet has too many characters!⚠️⚠️⚠️").slideDown();
  }

    $.ajax(`/tweets`,{
      method: "POST",
      data: $(this).serialize()
    })
    .then(function () {
      $(".error").hide();
      $(".tweet-text").val("").empty();
      $(".counter").text("140")
      loadTweets()
    })
    .catch(error => console.log(error));
  });
};

//using jQuery will make request to retrive tweet array as JSON
//introducing timeago 
const loadTweets = function() {
  $.ajax('/tweets', {
    method: 'GET',
  })
  .then((tweets) => {
    renderTweets(tweets)
  })
  .catch(error => console.log(error));
};

//cross-site scripting, to prevent XSS attack
const escape = function(string) {
  let div = document.createElement('div');
  div.appendChild(document.createTextNode(string));
  return div.innerHTML;
};

$(document).ready(() => {
  postTweets()
  loadTweets()
  tweetValid(tweet)
});
