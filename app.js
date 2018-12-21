$(document).ready(function(){
  // write to local storage from input when button save clicked
   $('.btn-submit').on('click', function(){
    let key;
    let value;
    var $powerballNumbers = JSON.stringify([$('.input-one').val() + ', ' + $('.input-two').val() + ', ' + $('.input-thr').val() + ', ' + $('.input-fou').val() + ', ' + $('.input-fiv').val() + ', PB: ' + $('.input-pwb').val()])
    if ($('.input-key').val() && $('.input-one').val() && $('.input-two').val() && $('.input-thr').val() && $('.input-fou').val() && $('.input-fiv').val()) {
      var arr = [];
      if (!localStorage.hasOwnProperty($('.input-key').val())) {
        localStorage.setItem($('.input-key').val(), $powerballNumbers)
        key = $('.input-key').val()
        value = $powerballNumbers
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
      let $keyValue = $('<div class="keys">' + key + ':</div><div class="value">' + value + '</div>')
      $('.list-display-field').html(' ')
      $('.list-display-field').append($keyValue)
  });

  // delete from local storage when delete button clicked
  $('.btn-delete').on('click', function(){
    localStorage.removeItem($('.input-key').val());
    $('.list-display-field').text($('.input-key').val() + ' key deleted');
  });
  $('.btn-delete-all').on('click', function(){
    localStorage.clear()
    $('.list-display-field').text('nothing to display yet');
  });
});