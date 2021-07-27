/**
 * 通用事件绑定函数
 * @param {elem} elem 
 * @param {type} type 
 * @param {fn} fn 
 */
function bindEvent(elem, type, selector, fn) {
  if (fn == null) {
    fn = selector
    selector = null
  }
  elem.addEventListener(type, e => {
    let target
    if (selector) {
      //代理绑定
      target = e.target
      if (target.matches(selector)) {
        fn.call(target, e)
      } else {
        //普通绑定
        fn.call(target, e)
      }
    }
  })
}

const a = document.getElementById('link1')
bindEvent(a, 'click', event => {
  //console.log(event.target) //获取触发的元素
  event.preventDefault() //阻止默认行为
  alert('click')
})