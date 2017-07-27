describe('LearnJS', function() {
  it('shows the landing page view when there is no hash', function() {
    learnjs.showView('');
    expect($('.view-container .landing-view').length).toEqual(1);
  })

  it('can show a problem view', function() {
    learnjs.showView('#problem-1');
    expect($('.view-container .problem-view').length).toEqual(1);
  })

  it('passes the hash view parameter to the view function', function() {
    spyOn(learnjs, 'problemView');
    learnjs.showView('#problem-42');
    expect(learnjs.problemView).toHaveBeenCalledWith('42');
  });

  describe('problem view', function() {
    it('has a title that includes the problem number', function() {
      let problemNumber = 42;
      let view = learnjs.problemView(problemNumber);
      let title_val = view.find('.title');
      let title = 'Problem #' + problemNumber;
      _.each([1,2,3], function(num) {
        console.log(`NUMBER: ${num}`);
      })
       // console.log(view);
       console.log(title_val);
      // console.log(`TITLE test: ${title}`);
      // console.log(`VIEW.text: ${view.text()}`)
      // console.log(`TITLE test length: ${title.length}`);
      // console.log(`VIEW.text length: ${view.text('.title').length}`)
      // let title = 'Problem #' + problemNumber + ' Coming soon!';
      expect(title_val.text()).toEqual(title);
      // expect(view.text()).toEqual(title);
      // expect(view.text()).toEqual('Problem #1 Coming soon!');
    })
  })
  it('invokes the router when loaded', function() {
    spyOn(learnjs, 'showView');
    learnjs.appOnReady();
    expect(learnjs.showView).toHaveBeenCalledWith(window.location.hash);
  });

  it('subscribes to the hash change event', function() {
    learnjs.appOnReady();
    spyOn(learnjs, 'showView');
    $(window).trigger('hashchange');
    expect(learnjs.showView).toHaveBeenCalledWith(window.location.hash);
  })

  describe('answer section', function() {
    let problemNumber = 1;
    let view = learnjs.problemView(problemNumber);
    console.log(`PROBLEM VIEW: ${JSON.stringify(view)}`);
    it('can check a correct answer by hitting a button', function() {
      view.find('.answer').val('true');
      view.find('.check-btn').click();
      console.log(`ANSWER: ${view.find('.result').html()}`);
      expect(view.find('.result .correct-flash span').text()).toEqual('Correct!');
      // expect(view.find('.result').text()).toEqual('Correct!');
    });
    it('rejects an incorrect answer', function() { view.find('.answer').val('false'); view.find('.check-btn').click(); expect(view.find('.result').text()).toEqual('Incorrect!');
      });
  });
})
