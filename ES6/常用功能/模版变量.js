//ES5
var name = 'zhangsan',
  age = 20,
  html = '';
html += '<div>';
html += '<p>' + name + '</p>';
html += '<p>' + age + '</p>';
html += '</div>';

console.log(html);

//ES6
const name = 'zhangsan',
  age = 20;
const html = `
        <div>
          <p>${name}</p>
          <p>${age}</p>
        </div>
  `
console.log(html);