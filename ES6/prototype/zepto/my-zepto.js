(function (window) {
  var zepto = {}

  function Z(dom, selector) {
    var i, len = dom ? dom.length : 0
    for (i = 0; i < len; i++) {
      this[i] = dom[i]
    }
    this.length = len
    this.selector = selector || ''
  }

  zepto.Z = function (dom, selector) {
    return new Z(dom, selector)
  }

  zepto.init = function (selector) {
    var slice = Array.prototype.slice
    var dom = slice.call(document.querySelectorAll(selector))
    return zepto.Z(dom, selector)
  }

  var $ = function (selector) {
    return zepto.init(selector)
  }

  window.$ = $

  $.fn = {
    css: function (key, value) {
      alert('css')
    },
    html: function (value) {
      alert('html')
      return '模拟html'
    }
  }
  Z.prototype = $.fn //构造函数的原型上的方法，所有的实例都可以访问到
})(window)