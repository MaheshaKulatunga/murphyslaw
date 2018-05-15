function parallax() {
  setpos("#bg1");
  setpos("#bg2");
  setpos("#bg3", 4);
  setpos("#bg4");
  setpos("#bg5");
}



function setpos(element, factor) {
  factor = factor || 2;

  var offset = $(element).offset();
  var w = $(window);

  var posx = (offset.left - w.scrollLeft()) / factor;
  var posy = (offset.top - w.scrollTop()) / factor;

  $(element).css('background-position', '50% ' + posy + 'px');

  // use this to have parralax scrolling vertical and horizontal
  //$(element).css('background-position', posx+'px '+posy+'px');
}

$(document).ready(function () {
  parallax();
}).scroll(function () {
  parallax();
});
