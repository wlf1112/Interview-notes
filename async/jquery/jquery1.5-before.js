/**
 * jquery1.5版本之前
 */
var ajax = $.ajax({
  url: 'data.json',
  success: function () {
    console.log('success1');
    console.log('success2');
    console.log('success3');
  },
  error: function () {
    console.log('error');
  }
})
console.log(ajax); //返回一个XHR对象