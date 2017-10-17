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

// var FadingDancer = function(top, left, timeBetweenSteps) {
//   Dancer.call(this, top, left, timeBetweenSteps);
//   this.$node.addClass('fade');
// };

// FadingDancer.prototype = Object.create(Dancer.prototype);
// FadingDancer.prototype.constructor = FadingDancer;

// FadingDancer.prototype.step = function() {
//   Dancer.prototype.step.call(this);
//   this.$node.fadeToggle();
// };