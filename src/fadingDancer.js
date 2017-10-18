window.FadingDancer = class FadingDancer extends Dancer {
  constructor(top, left, timeBetweenSteps) {
    super(top, left, timeBetweenSteps);
    this.$node.addClass('fade');
  }

  step() {
    Dancer.prototype.step.call(this);
    if (!this.hovered) {
      this.$node.fadeToggle();
    }
    
  }
};