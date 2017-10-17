// Creates and returns a new dancer object that can step
var Dancer = function(top, left, timeBetweenSteps) {

  // use jQuery to create an HTML <span> tag
  this.$node = $('<span class="dancer"></span>');
  this.timeBetweenSteps = timeBetweenSteps;
  this.originalTop = top;
  this.originalLeft = left;
  this.isDancing = false;


  // now that we have defined the dancer object, we can start setting up important parts of it by calling the methods we wrote
  // this one sets the position to some random default point within the body
  this.step();
  this.setPosition(top, left);
};

Dancer.prototype.step = function() {
  // the basic dancer doesn't do anything interesting at all on each step,
  // it just schedules the next step
  setTimeout(this.step.bind(this), this.timeBetweenSteps);
};

Dancer.prototype.lineUp = function(top, left, isDancing) {
  this.isDancing = isDancing;
  this.setPosition(top || this.originalTop, left || this.originalLeft);
};

Dancer.prototype.disperse = function(isDancing) {
  this.isDancing = isDancing;
  this.setPosition(this.originalTop, this.originalLeft);
};

Dancer.prototype.danceOff = function(direction, isDancing) {
  //this.setPosition(top || this.originalTop, left || this.originalLeft);
  this.$node.animate({top: "250px" }, 5000, function() {});
  this.isDancing = isDancing;
  // var t = 0;

  // var dance = function() {
  //   if (this.isDancing) {
  //     t += 0.05;
  //     var r = 50;
  //     var xcenter = this.originalLeft;
  //     var ycenter = this.originalTop;
  //     var newLeft = Math.floor(xcenter + (r * Math.cos(t)));
  //     var newTop = Math.floor(ycenter + (r * Math.sin(t)));
  //     this.setPosition(newTop, newLeft);
  //     dance();

  //     this.$node.animate({top: newTop, left: newLeft}, 1, function() { dance(); });
  //   }
  //   return;
  // };
  // dance();
};

Dancer.prototype.interact = function(top, left) {
  console.log(top + ' ' + left);
  this.$node.animate({top: top, left: left }, 5000, function() {});
  this.$node.animate({top: this.originalTop, left: this.originalLeft }, 5000, function() {});
};

Dancer.prototype.setPosition = function(top, left) {
  // Use css top and left properties to position our <span> tag
  // where it belongs on the page. See http://api.jquery.com/css/
  //
  var styleSettings = {
    top: top,
    left: left
  };
  this.$node.css(styleSettings);
};