// NAVBAR DESIGN
$(document).ready(function(){
  var userHeight = Math.max(document.documentElement.clientHeight, window.innerHeight || 0);
  var startFade = userHeight - userHeight/2;
  var endFade = userHeight - 70;
  var $navbar = $('#navbar');
  var st = $(this).scrollTop();
  if ( st <= startFade ) {
    $navbar.css({ 'background' : 'rgba(28, 84, 156, 0.0)' });
  } else if ( st > startFade && st < endFade ) {
    var transparancy = ((st/endFade - startFade/endFade) / (1 - startFade/endFade));
    $navbar.css({ 'background' : `rgba(28, 84, 156, ${transparancy})` });
  } else {
    $navbar.css({ 'background' : 'rgba(28, 84, 156, 1)' });
  }

  $(window).on('scroll', function() {
    var st = $(this).scrollTop();
    if ( st <= startFade ) {
      $navbar.css({ 'background' : 'rgba(28, 84, 156, 0.0)' });
    } else if ( st > startFade && st < endFade ) {
      var transparancy = ((st/endFade - startFade/endFade) / (1 - startFade/endFade));
      $navbar.css({ 'background' : `rgba(28, 84, 156, ${transparancy})` });
    } else {
      $navbar.css({ 'background' : 'rgba(28, 84, 156, 1)' });
    }
  });
});

// MENU LINKS TO SECTIONS
$(document).ready(function(){
  $('#navbar').on('click', '#toAbout', function() {
    event.preventDefault();
    var targetOffset = $('#about').offset().top - 70;
    $("html, body").animate({scrollTop: targetOffset}, 500);
  });

  // TODO
  $('#navbar').on('click', '#toResume', function() {
    event.preventDefault();
    var targetOffset = $('#resume').offset().top - 70;
    $("html, body").animate({scrollTop: targetOffset}, 500);
  });

  $('#navbar').on('click', '#toWork', function() {
    event.preventDefault();
    var targetOffset = $('#work').offset().top - 70;
    $("html, body").animate({scrollTop: targetOffset}, 500);
  });

  $('#navbar').on('click', '#toContact', function() {
    event.preventDefault();
    var targetOffset = $('#contact').offset().top - 70;
    $("html, body").animate({scrollTop: targetOffset}, 500);
  });

  $('#arrow-down-toAbout').on('click', function() {
    event.preventDefault();
    var targetOffset = $('#about').offset().top - 70;
    $("html, body").animate({scrollTop: targetOffset}, 500);
  });

  $('#button-toContact').on('click', function() {
    event.preventDefault();
    var targetOffset = $('#contact').offset().top - 70;
    $("html, body").animate({scrollTop: targetOffset}, 500);
  });
});

// MOBILE NAVBAR MENU
function openMenu() {
  document.getElementById("dropdown").classList.toggle("show");
}

$(function(){
  window.onclick = function(event) {
    if (!event.target.matches('.dropbtn')) {

      var dropdowns = document.getElementsByClassName("dropdown-content");
      var i;
      for (i = 0; i < dropdowns.length; i++) {
        var openDropdown = dropdowns[i];
        if (openDropdown.classList.contains('show')) {
          openDropdown.classList.remove('show');
        }
      }
    }
  };
});

// CANVAS MAIN PAGE
function loadGraph(){
  var pageWidth = $(document).width();;
  var a_canvas = document.getElementById("graph");
  var context = a_canvas.getContext("2d");
  context.canvas.width = pageWidth;
  drawGraph(0, context);
  drawGraph(0.05, context);
  drawGraph(0.1, context);
}

function drawGraph(offset, context){
  var width = context.canvas.clientWidth;
  var height = context.canvas.clientHeight;
  context.beginPath();
  context.moveTo(0,height);
  context.lineTo(0,0);
  context.lineTo((width*.2)+(offset*width),height*Math.random());
  context.lineTo((width*.4)+(offset*width),height*Math.random());
  context.lineTo((width*.6)+(offset*width),height*Math.random());
  context.lineTo((width*.8)+(offset*width),height*Math.random());
  context.lineTo(width,height*Math.random());
  context.lineTo(width,height);
  context.fillStyle = "rgba(255, 255, 255, 0.2)";
  context.closePath();
  context.fill();
}

$(function(){
  loadGraph();
});
