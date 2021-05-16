function loadImg(src) {
  const p = new Promise(
    (resolve, reject) => {
      const img = document.createElement('img')
      img.onload = () => {
        resolve(img)
      }
      img.onerror = () => {
        const err = new Error(`图片加载失败  ${src}`)
        reject(err)
      }
      img.src = src
    }
  )
  return p
}

//只加载一张图片
// const url = 'https://img3.mukewang.com/565d5bc50001e11d02450220-100-100.jpg'
// loadImg(url).then(img => {
//   console.log(img.width);
//   return img
// }).then(img => {
//   console.log(img.height)
// }).catch(ex => console.log(ex))

//加载两张图片，先加载第一张，后加载第二张

const url1 = 'https://img3.mukewang.com/565d5bc50001e11d02450220-100-100.jpg'
const url2 = 'https://img.mukewang.com/user/5b357c3700011a4c09600960-100-100.jpg'

loadImg(url1).then(img1 => {
  console.log(img1.width)
  return img1 //普通对象
}).then(img1 => {
  console.log(img1.height)
  return loadImg(url2) //Promise实例
}).then(img2 => {
  console.log(img2.width)
  return img2
}).then(img2 => {
  console.log(img2.height)
}).catch(ex => console.log(ex))