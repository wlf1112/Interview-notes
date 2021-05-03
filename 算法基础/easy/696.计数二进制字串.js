//leetcode测试用例字符串过长导致RegExp too big的问题
var countBinarySubstrings = function (s) {
  let result = [];
  let match = (s) => {
    let j = s.match(/^(0+|1+)/)[0]
    let o = (j[0] ^ 1).toString().repeat(j.length)
    let reg = new RegExp(`^(${j}${o})`)
    if (reg.test(s)) {
      return RegExp.$1;
    }
  }
  for (let i = 0; i < s.length - 1; i++) {
    let sub = match(s.slice(i));
    if (sub) {
      result.push(sub);
    }
  }
  return result.length;
};