// Fake data taken from initial-tweets.json
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
  <p2>${tweet.content.created_at}</p2>
</footer>
</article>
`
return $tweet;
}

renderTweets(data);
