$(document).ready(function(){
  // write to local storage from input when button save clicked
   $('.btn-submit').on('click', function(){
    let key;
    let value;
    if ($('.input-key').val() && $('.input-value').val()) {
      var arr = [];
      if (!localStorage.hasOwnProperty($('.input-key').val())) {
        localStorage.setItem($('.input-key').val(), $('.input-value').val())
        key = $('.input-key').val()
        value = $('.input-value').val()
      } else if (localStorage.getItem($('.input-key').val()).includes($('.input-value').val())) {
        key = $('.input-key').val()
        value = localStorage.getItem($('.input-key').val())
      } else {
        var prev = localStorage.getItem($('.input-key').val())
        var curr = $('.input-value').val()
        arr.push(prev + ', ' + curr)
        localStorage.setItem($('.input-key').val(), arr)
        key = $('.input-key').val()
        value = arr;
      }
    }

    // display the value here
      let $keyValue = $('<div class="keys">' + key + ': ' + '</div><div class="value">' + value + '</div>')
      $('.list-display-field').html(' ')
      $('.list-display-field').append($keyValue)
  });

  // delete from local storage when delete button clicked
  $('.btn-delete').on('click', function(){
    localStorage.removeItem($('.input-key').val());
    $('.list-display-field').text('nothing to display yet');
  });
  $('.btn-delete-all').on('click', function(){
    localStorage.clear()
    $('.list-display-field').text('nothing to display yet');
  });
});