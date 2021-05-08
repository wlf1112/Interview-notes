var grayCode = function (n) {
  let make = (n) => {
    if (n === 1) {
      return ['0', '1']
    } else {
      let result = [];
      let max = Math.pow(2, n) - 1
      //获取前一级的格雷编码
      let prev = make(n - 1)
      for (let i = 0, len = prev.length; i < len; i++) {
        result[i] = `0${prev[i]}`
        result[max - i] = `1${prev[i]}`
      }
      return result
    }
  }
  let resultArr = make(n).map(function (item) {
    return parseInt(item, 2)
  })
  return resultArr
};
