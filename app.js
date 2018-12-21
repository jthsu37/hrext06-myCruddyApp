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

  let obj = {};
  let globalCount = 0;
  $('.btn-update').on('click', function(){
    let key;
    let value;
    let firstInput;
    let firstInputObj;
    let firstCount;
    let firstPercent;
    if (!obj[$('.input-one').val()]) {
      globalCount++
      firstInput = [$('.input-one').val()]
      firstInputObj = obj[firstInput] = {}
      firstCount = firstInputObj['count'] = 1
      firstPercent = firstInputObj['percent'] = Number((firstCount / globalCount) * 100).toFixed(2)
      localStorage.setItem($('.input-key').val(), JSON.stringify(obj))
      key = 'Number ' + $('.input-one').val()
      value = 'Count: ' + firstInputObj['count'] + ' Percent: ' + firstInputObj['percent']
    } else {
      // var oldValue = localStorage.getItem($('.input-key').val())
      // console.log(JSON.parse(oldValue))
      obj[$('.input-one').val()]['count']++
      globalCount++
      obj[$('.input-one').val()]['percent'] = Number(obj[$('.input-one').val()]['count'] / globalCount * 100).toFixed(2)
      localStorage.setItem($('.input-key').val(), JSON.stringify(obj))
      key = 'Number ' + $('.input-one').val()
      value = 'Count: ' + obj[$('.input-one').val()]['count'] + ' Percent: ' + Number(obj[$('.input-one').val()]['percent']).toFixed(2)
    }
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

//Store stats for each number
//every time num is input modify its count
//modify its %
//set % to 2 decimal places
//Number.parseFloat().toFixed(2);
//create an object
//if count of the number doesnt exist
  //set count to one
  //else
  //increase count by one
//if % doesnt exist
  //1 / array length
  //else
  //1+1 / array length
// obj = {
//   '01': {
//     'count': 1,
//     'percent': 100,
//   }
// }

// obj = {
//   '01': {
//     'count': 1,
//     'percent': 50,
//   },
//   '02': {
//     'count': 1,
//     'percent': 50
//   }
// }