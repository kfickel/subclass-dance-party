// Creates and returns a new dancer object that can step
//var Dancer = function(top, left, timeBetweenSteps) {
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
      //query.animate(query.addClass('dancing'), 1000, function() {
      //  query.removeClass('dancing');
      //});
    });
      // function() {
      // if (!flip) {
      //   query.addClass('dancing');
      // } else {
      //   query.removeClass('dancing');
      // }
      // flip = !flip;
      // );
    this.hovered = false;
  }
  interact(top, left) {
    this.$node.animate({top: top, left: left }, 2000, function() {});
    this.$node.animate({top: this.originalTop, left: this.originalLeft }, 2000, function() {});
  }
  setPosition(top, left) {
    // var styleSettings = {
    //   top: top,
    //   left: left
    // };
    //this.$node.css(styleSettings);
    this.$node.stop(true, true);
    this.$node.animate({top: top, left: left }, 2000, function() {});
  }
  
}
/*
 
  $('body').on('mouseover','.dancer', function(event) {
    $(this).addClass('highlight');
  });

  $('body').on('mouseleave','.dancer', function(event) {
    $(this).removeClass('highlight');
  });
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

Dancer.prototype.danceOff = function(top, left, isDancing) {
  //this.setPosition(top || this.originalTop, left || this.originalLeft);
  this.$node.animate({top: top, left: left }, 1000, function() {});
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
  this.$node.animate({top: top, left: left }, 2000, function() {});
  this.$node.animate({top: this.originalTop, left: this.originalLeft }, 2000, function() {});
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
*/