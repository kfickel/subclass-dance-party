$(document).ready(function() {
  window.dancers = [];

  $('.addDancerButton').on('click', function(event) {
    /* This function sets up the click handlers for the create-dancer
     * buttons on dancefloor.html. You should only need to make one small change to it.
     * As long as the "data-dancer-maker-function-name" attribute of a
     * class="addDancerButton" DOM node matches one of the names of the
     * maker functions available in the global scope, clicking that node
     * will call the function to make the dancer.
     */

    /* dancerMakerFunctionName is a string which must match
     * one of the dancer maker functions available in global scope.
     * A new object of the given type will be created and added
     * to the stage.
     */
    const dancerMakerFunctionName = $(this).data('dancer-maker-function-name');

    // get the maker function for the kind of dancer we're supposed to make
    const dancerMakerFunction = window[dancerMakerFunctionName];

    // make a dancer with a random position

    const dancer = new dancerMakerFunction(
      $("body").height() * .8 * Math.random(),
      $("body").width() * .8 * Math.random(),
      Math.random() * 1000
    );
    dancers.push(dancer);
    $('body').append(dancer.$node);
    //check if the arrays length is even
    if (window.dancers.length % 2 === 0) {
      //if it is the second, call the first one's with interact
      const dancer1 = window.dancers[window.dancers.length - 1];
      const dancer2 = window.dancers[window.dancers.length - 2];
      dancer1.interact(dancer2.originalTop, dancer2.originalLeft);
      dancer2.interact(dancer1.originalTop, dancer1.originalLeft);
    }
  });

  $('.lineUpButton').on('click', (event) => {
    for (let i = 0; i < window.dancers.length; ++i) {
      window.dancers[i].lineUp($("body").height() * .7, null);
    }
  });
  
  $('.disperse').on('click', (event) => {
    for (let i = 0; i < window.dancers.length; ++i) {
      window.dancers[i].disperse(false);
    }
  });

  $('.danceoff').on('click', (event) => {
    for (let i = 0; i < window.dancers.length; ++i) {
      window.dancers[i].lineUp($("body").height() * .7, null);
    }
    if (window.dancers[1]) {
      window.dancers[0].danceOff($("body").height() * .2, $("body").width() * .4);
      window.dancers[1].danceOff($("body").height() * .2, $("body").width() * .6);
    }
  });

  // let lineLeft = [];
  // let lineRight = [];
  // let leader;
  // let leaderSide;
  // $('.conga').on('click', (event) => {
    
  //   for (let i = 0; i < window.dancers.length; ++i) {
  //     let yPos = $("body").height() / (window.dancers.length / 2) * (i / 2);
  //     if (i % 2 === 0) {
  //       lineLeft.push(window.dancers[i]);
  //       window.dancers[i].setPosition(32 + yPos, $("body").width() * .01);
  //     } else {
  //       lineRight.push(window.dancers[i]);
  //       window.dancers[i].setPosition(32 + yPos, $("body").width() * .8);
  //     }
  //   }
  // });

  // $('.leader').on('click', (event) => {
  //   if (leader) {
  //     if (leaderSide) {
  //       lineLeft.push(leader);
  //     }
  //   }
  //   leaderSide = (side) ? true : false;
  //   leader = (side) ? lineLeft.pop() : lineRight.pop();
  //   let side = (lineLeft.length > lineRight.length) ? true : false;

  //   leader.setPosition($("body").height() * .4, $("body").width() * .4);
  // });
});

