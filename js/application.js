// NAVBAR DESIGN
$(function(){
  $(window).scroll(function(e){
    if ($(this).scrollTop() >= $(window).height() - 90) {
      $('#navbar:hidden').slideDown();
    } else {
      $('#navbar:visible').slideUp();
    }
  });

  if ($(this).scrollTop() >= $(window).height() - 90) {
    $('#navbar:hidden').slideDown();
  } else {
    $('#navbar:visible').slideUp();
  }
});

// LINKS TO SECTIONS
$(function(){
  if ($(window).width() > 992) {
    offsetScroll = 50
  }
  else {
    offsetScroll = 0
  }

  // Logo in navbar
  $('#navbar').on('click', '#home', function() {
    event.preventDefault();
    var targetOffset = $('#main').offset().top;
    $("html, body").animate({scrollTop: targetOffset}, 500);
  });

  // Navbar links
  $('#navbar').on('click', '#toAbout', function() {
    event.preventDefault();
    var targetOffset = $('#about').offset().top - offsetScroll;
    $("html, body").animate({scrollTop: targetOffset}, 500);
  });

  $('#navbar').on('click', '#toInnovation', function() {
    event.preventDefault();
    var targetOffset = $('#innovation').offset().top - offsetScroll;
    $("html, body").animate({scrollTop: targetOffset}, 500);
  });

  $('#navbar').on('click', '#toSimplicity', function() {
    event.preventDefault();
    var targetOffset = $('#simplicity').offset().top - offsetScroll;
    $("html, body").animate({scrollTop: targetOffset}, 500);
  });

  $('#navbar').on('click', '#toTechnology', function() {
    event.preventDefault();
    var targetOffset = $('#technology').offset().top - offsetScroll;
    $("html, body").animate({scrollTop: targetOffset}, 500);
  });

  $('#navbar').on('click', '#toSignUp', function() {
    event.preventDefault();
    var targetOffset = $('#signup').offset().top - offsetScroll;
    $("html, body").animate({scrollTop: targetOffset}, 500);
  });

  $('#button-toContact').on('click', function() {
    event.preventDefault();
    var targetOffset = $('#contact').offset().top - offsetScroll;
    $("html, body").animate({scrollTop: targetOffset}, 500);
  });

  // More information in main
  $('#moreInfo').on('click', function() {
    event.preventDefault();
    var targetOffset = $('#about').offset().top - offsetScroll;
    $("html, body").animate({scrollTop: targetOffset}, 500);
  });

  $('#signupMain').on('click', function() {
    event.preventDefault();
    var targetOffset = $('#signup').offset().top - offsetScroll;
    $("html, body").animate({scrollTop: targetOffset}, 500);
  });

  $('#moreInfoArrow').on('click', function() {
    event.preventDefault();
    var targetOffset = $('#about').offset().top - offsetScroll;
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

// TEAM SLIDER
$(function(){
  $('.flexslider').flexslider({animation: "slide"});
});


// CANVAS MAIN PAGE
function loadGraph(){
  var pageWidth = $(window).width();;
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
