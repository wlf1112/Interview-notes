// 解法一
var reverseWords = function (s) {
  return s.split(' ').map(item => {
    return item.split('').reverse().join('')
  }).join(' ')
};

//解法二
var reverseWords = function (s) {
  return s.split(/\s/g).map(item => {
    return item.split('').reverse().join('')
  }).join(' ')
};
