
var letterCombinations = function (digits) {
  if (digits.length < 1) return [];
  let map = ['', '1', 'abc', 'def', 'ghi', 'jkl', 'mno', 'pqrs', 'tuv', 'wxyz']
  if (digits.length < 2) return map[digits].split('');
  let code = []
  let num = digits.split('');
  num.forEach(item => {
    if (map[item]) {
      code.push(map[item]);
    }
  })

  let comb = (arr) => {
    let temp = [];
    for (let i = 0, il = arr[0].length; i < il; i++) {
      for (let j = 0, jl = arr[1].length; j < jl; j++) {
        temp.push(`${arr[0][i]}${arr[1][j]}`);
      }
    }
    arr.splice(0, 2, temp);
    if (arr.length > 1) {
      comb(arr)
    } else {
      return temp
    }
    return arr[0]
  }
  return comb(code);
};
