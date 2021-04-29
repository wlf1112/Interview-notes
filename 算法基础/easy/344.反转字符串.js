var reverseString = function (s) {
  //解法一
  //return s.reverse();

  //解法二：解构赋值
  let i = 0,
    j = s.length - 1;
  while (i < j) {
    [s[i], s[j]] = [s[j], s[i]];
    i++;
    j--;
  }
};