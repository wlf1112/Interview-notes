var canPlaceFlowers = function (flowerbed, n) {
  let max = 0;
  flowerbed.push(0);
  for (let i = 0, len = flowerbed.length - 1; i < len; i++) {
    if (flowerbed[i] === 0) {
      if (i === 0 && flowerbed[1] === 0) {
        max++;
        i++;
      } else if (flowerbed[i - 1] === 0 && flowerbed[i + 1] === 0) {
        max++;
        i++;
      }
    }
  }
  return max >= n;
};
