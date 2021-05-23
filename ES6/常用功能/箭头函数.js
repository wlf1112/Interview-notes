//ES5
function fn() {
  console.log('real', this);

  var arr = [1, 2, 3]
  arr.map(function (item) {
    console.log(this);
    return item + 1
  })
}

fn.call({
  a: 100
})


//ES6
function fn() {
  console.log('real', this);

  var arr = [1, 2, 3]
  arr.map(item => {
    console.log(this);
    return item + 1
  })
}

fn.call({
  a: 100
})