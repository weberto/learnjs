'use strict';
let learnjs = {};

learnjs.problems = [
  {
    description: "What is truth?",
    code: "function problem() { return __; }" },
  {
    description: "Simple Math",
    code: "function problem() { return 42 === 6 * __; }"
  }
];


learnjs.applyObject = function(obj, elem) {
  for (var key in obj) {
    elem.find('[data-name="' + key + '"]').text(obj[key]);
  }
};


learnjs.appOnReady = function() {
  window.onhashchange = function() {
    console.log('catching hash');
    learnjs.showView(window.location.hash);
    return false;
  }
  // window.history.pushState({"foo": "bar"}, "page", window.location.hash);
  learnjs.showView(window.location.hash);
}

learnjs.problemView = function(data) {
  var problemNumber = parseInt(data, 10);
  var view = $('.templates .problem-view').clone();
  var problemData = learnjs.problems[problemNumber - 1]; var resultFlash = view.find('.result');
  function checkAnswer() {
    var answer = view.find('.answer').val();
    var test = problemData.code.replace('__', answer) + '; problem();';
    return eval(test);
  }
  function checkAnswerClick() {
    if (checkAnswer()) {
      learnjs.flashElement(resultFlash, 'Correct!');
      // resultFlash.text('Correct!');
    } else {
      learnjs.flashElement(resultFlash, 'Incorrect!');
      // resultFlash.text('Incorrect!');
    }
    return false;
  }

  view.find('.check-btn').click(checkAnswerClick);
  view.find('.title').text('Problem #' + problemNumber);
  learnjs.applyObject(problemData, view);
  return view;
}



learnjs.flashElement = function(elem, content) { elem.fadeOut('fast', function() {
    elem.html(content);
    elem.fadeIn();
  });
}


/**
learnjs.problemView = function(problemNumber) {
  let title = "Problem #" + problemNumber;
  // let title = "Problem #" + problemNumber + " Hold on, I'm Coming soon!";
  let view = $('.templates .problem-view').clone();
  view.find('.title').text(title);
  learnjs.applyObject(learnjs.problems[problemNumber - 1], view);
  return view;
  // return($('<div class="problem-view">').text(title));
}
*/

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
  return false;
}
