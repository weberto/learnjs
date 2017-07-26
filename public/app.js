'use strict';
let learnjs = {};

learnjs.appOnReady = function() {
  window.onhashchange = function() {
    learnjs.showView(window.location.hash);
  }
  learnjs.showView(window.location.hash);
}

learnjs.problemView = function(problemNumber) {
  let title = 'Problem #' + problemNumber + ' Coming soon!';
  return($('<div class="problem-view">').text(title));
}

learnjs.showView = function(hash) {
  console.log(`hash: , ${hash}`);
  let routes = {
    '#problem': learnjs.problemView
  };
  let hashParts = hash.split('-');
  console.log(JSON.stringify(hashParts));
  let viewFn = routes[hashParts[0]];
  // let viewFn = routes[hash];
  if (viewFn) {
    $('.view-container').empty().append(viewFn(hashParts[1]));
    // $('.view-container').empty().append(learnjs.problemView);
  }

  // let problemView = $('<div class="problem-view">').text('Coming Soon');
  // $('.view-container').empty().append(problemView);
}
