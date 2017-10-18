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