/**
 * file: robot.js
 * purpose: animate by button
 **/
const robot = 'myRobot.png';

// shorthand for document ready function
$(function() {

  console.log('jQ ready!');

  // speed, position
  let top = 333,
    speed = 50;

  // #robot placeres oven på baggrunden (canvas)
  $('#robot').css({
    'position': 'absolute',
    'top': top,
    'width': '256px',
    'height': '256px',
    'background color': 'red',
    'z-index': '900'
  }).html(
    '<img src="billeder/' +
    robot +
    '" alt="Robot">');

  // flyt robotten med w a s d
  // tip: http://keycode.info/
  $(document).keydown(function(e) {
    switch (e.which) {
      // når der trykkes d
      case 68:
        console.log('der trykkes: d'); // tester

        // animation via Jquery
        $('#robot').stop().animate({
          left: '+=' + speed
        }); //left arrow key

        break;

        // fortsæt selv med fx: w, a, s ... herfra
    }


    // flyt ved kant
    var hvorErden = $('#robot').position();
    console.log(hvorErden);

    // når robotten passerer en position
    // sættes en ny baggrund
    if (hvorErden.left > 350) {
      speed = -50;
      console.log(speed);
      nyBaggrund();
    }
    // og modsat vej

  });

}); // ends jQ doc ready


/**
 * Vanilla Js: Canvas
 * Prikkerne på baggrunden tegnes dynamisk på canvas
 **/
function tal(n) {
  // returnerer rnd * n
  return Math.floor(Math.random() * n);
}

function cirkel(x, y) {
  var c = document.getElementById("myCanvas");
  var ctx = c.getContext("2d");
  ctx.beginPath();
  ctx.arc(x, y, tal(100), 0, 2 * Math.PI);
  ctx.lineWidth = 0;
  ctx.strokeStyle = "#000";
  ctx.fillStyle = "rgba( 255,0,0, .25 )";
  ctx.fill();
  ctx.stroke();
}

function nyBaggrund() {
  for (var x = 0; x <= 30; x++) {
    cirkel(tal(1200), tal(500));
  }
}

nyBaggrund();
