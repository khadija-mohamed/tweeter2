$(document).ready(function() {
  $(".tweet-text").on('input', function() {
    let charactersCounted = $(this).val().length;
    let remainingCharacters = 140 - charactersCounted;
    let counter = $(this).parent().next('div').children('.counter');
    counter.text(remainingCharacters);
  });
})