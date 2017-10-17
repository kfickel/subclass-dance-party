describe('blinkyDancer', function() {

  var blinkyDancer, clock;
  var timeBetweenSteps = 100;

  beforeEach(function() {
    clock = sinon.useFakeTimers();
    blinkyDancer = new BlinkyDancer(10, 20, timeBetweenSteps);
  });

  it('should have a jQuery $node object', function() {
    expect(blinkyDancer.$node).to.be.an.instanceof(jQuery);
  });

  it('should have a step function that makes its node blink', function() {
    sinon.spy(blinkyDancer.$node, 'toggle');
    blinkyDancer.step();
    expect(blinkyDancer.$node.toggle.called).to.be.true;
  });

  it('should change the top location of the dancers to the same top location', function() {
    var testDancer = new BlinkyDancer(10, 20, timeBetweenSteps);
    blinkyDancer.lineUp();
    testDancer.lineUp();
    console.log(blinkyDancer.$node.css('top') + ' ' + testDancer.$node.css('top'));
    expect(blinkyDancer.$node.css('top')).to.be.equal(testDancer.$node.css('top'));
  });

  it('should return dancer to its original top and original left location', function() {
    blinkyDancer.lineUp();
    blinkyDancer.disperse();
    expect(blinkyDancer.$node.css('top')).to.be.equal(blinkyDancer.originalTop + 'px');
  });

  it('should check if danceoff is a function', function() {
    expect(blinkyDancer.danceOff).to.be.a('function');
  });

  it('should check if interact is a function', function() {
    expect(blinkyDancer.interact).to.be.a('function');
  });

  describe('dance', function() {
    it('should call step at least once per second', function() {
      sinon.spy(blinkyDancer, 'step');
      expect(blinkyDancer.step.callCount).to.be.equal(0);
      clock.tick(timeBetweenSteps); // ? it seems an extra tick is necessary...
      clock.tick(timeBetweenSteps);

      expect(blinkyDancer.step.callCount).to.be.equal(1);

      clock.tick(timeBetweenSteps);
      expect(blinkyDancer.step.callCount).to.be.equal(2);
    });
  });
});
