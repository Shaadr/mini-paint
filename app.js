$(document).ready(function() {
  var color = 'white'
  var colors = 'white green red blue yellow';
  var white = $('#white')
  var blue = $('#blue')
  var green = $('#green')
  var yellow = $('#yellow')
  var red = $('#red')



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
