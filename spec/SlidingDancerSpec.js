describe('SlidingDancer', function() {

  var slidingDancer, clock;
  var timeBetweenSteps = 100;

  beforeEach(function() {
    clock = sinon.useFakeTimers();
    slidingDancer = new SlidingDancer(10, 20, timeBetweenSteps);
  });

  it('should have a jQuery $node object', function() {
    expect(slidingDancer.$node).to.be.an.instanceof(jQuery);
  });

  it('should have a step function that makes its node blink and slide', function() {
    sinon.spy(slidingDancer.$node, 'slideToggle');
    slidingDancer.step();
    expect(slidingDancer.$node.slideToggle.called).to.be.true;
  });

  it('should change the top location of the dancers to the same top location', function() {
    var testDancer = new SlidingDancer(10, 20, timeBetweenSteps);
    slidingDancer.lineUp();
    testDancer.lineUp();
    console.log(slidingDancer.$node.css('top') + ' ' + testDancer.$node.css('top'));
    expect(slidingDancer.$node.css('top')).to.be.equal(testDancer.$node.css('top'));
  });

  it('should return dancer to its original top and original left location', function() {
    slidingDancer.lineUp();
    slidingDancer.disperse();
    expect(slidingDancer.$node.css('top')).to.be.equal(slidingDancer.originalTop + 'px');
  });

  it('should check if danceoff is a function', function() {
    expect(slidingDancer.danceOff).to.be.a('function');
  });

  it('should check if interact is a function', function() {
    expect(slidingDancer.interact).to.be.a('function');
  });

  describe('dance', function() {
    it('should call step at least once per second', function() {
      sinon.spy(slidingDancer, 'step');
      expect(slidingDancer.step.callCount).to.be.equal(0);
      clock.tick(timeBetweenSteps); // ? it seems an extra tick is necessary...
      clock.tick(timeBetweenSteps);

      expect(slidingDancer.step.callCount).to.be.equal(1);

      clock.tick(timeBetweenSteps);
      expect(slidingDancer.step.callCount).to.be.equal(2);
    });
  });
});
