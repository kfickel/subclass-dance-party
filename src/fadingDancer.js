var FadingDancer = function(top, left, timeBetweenSteps) {
  Dancer.call(this, top, left, timeBetweenSteps);
  this.$node.addClass('fade');
};

FadingDancer.prototype = Object.create(Dancer.prototype);
FadingDancer.prototype.constructor = FadingDancer;

FadingDancer.prototype.step = function() {
  Dancer.prototype.step.call(this);
  this.$node.fadeToggle();
};