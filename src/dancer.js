// Creates and returns a new dancer object that can step
class Dancer {
  // use jQuery to create an HTML <span> tag
  constructor(top, left, timeBetweenSteps) {
    this.$node = $('<span class="dancer"></span>');
    this.timeBetweenSteps = timeBetweenSteps;
    this.originalTop = top;
    this.originalLeft = left;
    this.hovered = false;
    this.$node.on('mouseover', (event) => {
      this.hovered = true;
      this.$node.addClass('highlight');
    });
    this.$node.on('mouseleave', (event) => {
      this.hovered = false;
      this.$node.removeClass('highlight');
    });

    // now that we have defined the dancer object, we can start setting up important parts of it by calling the methods we wrote
    // this one sets the position to some random default point within the body
    this.step();
    this.setPosition(top, left);
  }

  step() {
    setTimeout(this.step.bind(this), this.timeBetweenSteps);
  }

  lineUp(top, left) {
    this.setPosition(top || this.originalTop, left || this.originalLeft);
  }

  disperse() {
    this.$node.removeClass('dancing');
    this.setPosition(this.originalTop, this.originalLeft);
  }
  danceOff(top, left) {
    this.hovered = true;
    this.$node.stop(true, true);
    let query = this.$node;
    let flip = false;
    this.$node.animate({top: top, left: left }, 2000, function() {
      query.addClass('dancing');
      setTimeout(() => query.removeClass('dancing'), 2000);
    });
    this.hovered = false;
  }
  interact(top, left) {
    this.$node.animate({top: top, left: left }, 2000, function() {});
    this.$node.animate({top: this.originalTop, left: this.originalLeft }, 2000, function() {});
  }
  setPosition(top, left) {
    this.$node.stop(true, true);
    this.$node.animate({top: top, left: left }, 2000, function() {});
  }
  
}