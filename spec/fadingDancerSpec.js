describe('FadingDancer', function() {

  var fadingDancer, clock;
  var timeBetweenSteps = 100;

  beforeEach(function() {
    clock = sinon.useFakeTimers();
    fadingDancer = new FadingDancer(10, 20, timeBetweenSteps);
  });

  it('should have a jQuery $node object', function() {
    expect(fadingDancer.$node).to.be.an.instanceof(jQuery);
  });

  it('should have a step function that makes its node fade in and out', function() {
    sinon.spy(fadingDancer.$node, 'fadeToggle');
    fadingDancer.step();
    expect(fadingDancer.$node.fadeToggle.called).to.be.true;
  });

  it('should change the top location of the dancers to the same top location', function() {
    var testDancer = new FadingDancer(10, 20, timeBetweenSteps);
    fadingDancer.lineUp();
    testDancer.lineUp();
    console.log(fadingDancer.$node.css('top') + ' ' + testDancer.$node.css('top'));
    expect(fadingDancer.$node.css('top')).to.be.equal(testDancer.$node.css('top'));
  });

  it('should return dancer to its original top and original left location', function() {
    fadingDancer.lineUp();
    fadingDancer.disperse();
    expect(fadingDancer.$node.css('top')).to.be.equal(fadingDancer.originalTop + 'px');
  });

  it('should check if danceoff is a function', function() {
    expect(fadingDancer.danceOff).to.be.a('function');
  });

  it('should check if interact is a function', function() {
    expect(fadingDancer.interact).to.be.a('function');
  });

  describe('dance', function() {
    it('should call step at least once per second', function() {
      sinon.spy(fadingDancer, 'step');
      expect(fadingDancer.step.callCount).to.be.equal(0);
      clock.tick(timeBetweenSteps); // ? it seems an extra tick is necessary...
      clock.tick(timeBetweenSteps);

      expect(fadingDancer.step.callCount).to.be.equal(1);

      clock.tick(timeBetweenSteps);
      expect(fadingDancer.step.callCount).to.be.equal(2);
    });
  });
});
