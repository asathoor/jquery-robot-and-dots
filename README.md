The Robot and the Dots
======================

## Alternative

Either download jQuery from [jQuery.com](http://jquery.com) or use a CDN. Whatever you choose, change the script src, so that it will point to the jQuery script.

## The cute little robot

Draw or download an image of a cute little robot, spaceshipt or similar - preferably as a transparent .png or .svg. Change the `<img src="yourImage.png">` tag. If you see a robot, you're ready to go. You may use this image as an alternative to my primitive robot.

## Todo List

* Only the d key works - add the w,a,s keys too. Now you're "MaKeyMaKey ready".
* Finetune the robot position via the `var top =` so that the robot will walk along the bottom line of the browser.
* Change backgrounds when the robot reach a certain point. Now you can do "scenes" or "levels".
* Add sounds.

## On your own: .SVG animation by jQuery

The robot is kind of static. You can animate .SVG files via CSS.

* [Animating SVG CSS](https://css-tricks.com/animating-svg-css/)

Since you can add css to HTML, you can use jQuery in order to control your animations. 

You can do something along these lines:

~~~~
$('#myGroup').css({
    'animation-name' : 'myAnimation',
    'animation-duration' : '2000ms',
    'animation-delay' : '100ms',
    'animation-timing-function' : 'ease-in-out'
})
~~~~

Experiment with animation-control - e.g. trigered by events such as mouse over, clicks or keypress (here's where the MaKeyMaKey will enter your project). 