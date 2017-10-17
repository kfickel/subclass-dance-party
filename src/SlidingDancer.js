window.SlidingDancer = class SlidingDancer extends Dancer {
  constructor(top, left, timeBetweenSteps) {
    super(top, left, timeBetweenSteps);
    this.$node.addClass('slide');
  }

  step() {
    Dancer.prototype.step.call(this);
    if (!this.hovered) {
      this.$node.slideToggle();
    }
  }
};

// var SlidingDancer = function (top, left, timeBetweenSteps) {
//   Dancer.call(this, top, left, timeBetweenSteps);
//   this.$node.addClass('slide');
// };

// SlidingDancer.prototype = Object.create(Dancer.prototype);
// SlidingDancer.prototype.constructor = SlidingDancer;

// SlidingDancer.prototype.step = function() {
//   Dancer.prototype.step.call(this);
//   this.$node.slideToggle();
// };