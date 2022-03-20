// loops through tweets
// calls createTweetElement for each tweet
// takes return value and appends it to the tweets container
const renderTweets = function(tweets) {
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
    <h2 class="username">${tweet.user.name}</h2>
    <span class="handle">${tweet.user.handle}</span>
</header>
<section>
  <p>${tweet.content.text}</p>
  </section>
  <footer class="tweet-footer">
  <p2>${timeago.format(tweet.content.created_at, 'pt_BR')}</p2>
</footer>
</article>
`
return $tweet;
}

//form submission with JQuery, serialize()function to send to server as query string
//event listener added which prevents refresh of page upon clicking the button/submitting tweet
const postTweets = function(event) {
  $(".tweetsSent").submit(function(event) {
  event.preventDefault();
    $.ajax(`/tweets`,{
      method: "POST",
      data: $(this).serialize()
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



$(document).ready(() => {
  postTweets()
  loadTweets()
});
