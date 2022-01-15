jQuery('.test')
  .find('.child') //不返回元素们，返回 api 对象
  .addClass('red')
  .addClass('blue') // this 就是 api
  .addClass('green') //链式操作
  .end()
  .addClass('yellow');
// // obj.fn(p1)     //函数里的 this 就是obj
// // obj.fn.call(obj,p1)

const x = jQuery('.test');

x.each((div) => console.log(div));

x.parent().print();
x.children().print();

$('<div>1</div>').appendTo(document.body);
