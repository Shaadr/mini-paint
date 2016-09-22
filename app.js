$(document).ready(function() {
  var color = 'white'
  var colors = 'white green red blue yellow';
  var white = $('#white')
  var blue = $('#blue')
  var green = $('#green')
  var yellow = $('#yellow')
  var red = $('#red')

//to drag and drop:  while mouse down, if mouse enter
//change class to color
//until mouse up

$(function() {
  var isMouseDown = false,
  isColored;
  $('.box').mousedown(function() {
    isMouseDown = true;
    $(this).addClass(color);
    isColored =
    $(this).hasClass(color);
      return false;
  })
  .mouseover(function() {
    if(isMouseDown) {
      $(this).addClass(color);
    }
  })
  .bind("selectstart",function() {
    return false;
  })
  $(document)
    .mouseup(function() {
      isMouseDown = false;
    })
})

  // $('.box').on('mousedown', function() {
  //   $(this).on('mouseenter'), function() {
  //     $(this).addClass(colors)
  //   }
  // })


  $('.box').on('click', function() {
    $(this).addClass(color);
  })

  $('.box').on('dblclick', function() {
    $(this).removeClass(colors)
  })
  $('#reset').on('click', function() {
    $('.box').removeClass(colors);
  })



  white.on('click', function() {
    color = 'white';
  })

  blue.on('click', function() {
    color = 'blue';
  })

  green.on('click', function() {
    color = 'green';
  })

  yellow.on('click', function() {
    color = 'yellow';
  })

  red.on('click', function() {
    color = 'red';
  })
})
