/**
 * 实现一个compose函数
 * 
 * 说明：compose函数的作用是组合函数，依次组合传入的函数
 *      1.后一个函数作为前一个函数的参数
 *      2.最后一个函数可以接受多个参数，前面的函数只能接受单个参数；后一个的返回值传给前一个
 * 
 * 举例分析：compose(f4,f3,f2,f1)(c,d,e)
 *  1.reduce回调函数第一次执行时，返回值为函数 (...args)=>f4(f3(...args)),作为下一次执行的参数
 *  2.回调函数第二次执行时，返回值为函数 (...args)=>f4(f3(f2(...args)))，作为下一次执行的参数
 *  3.回调函数第三次执行时，返回值为函数 (...args)=>f4(f3(f2(f1(...args))))
 * 最后右边的参数f1可以接受多个参数，然后返回结果给下一个函数f2，返回结果再传入f3,f3最先被调用，回等到f2的结果，再等待f1的结果
 */
function fn1(x){
    return x+1;
}
function fn2(x){
    return x+2;
}
function fn3(x){
    return x+3;
}
function fn4(x){
    return x+4;
}
const a=compose(fn1,fn2,fn3,fn4);
console.log(a(1));

function compose(...fn){
    if(!fn.length) return (v)=>v;
    if(fn.length===1) return fn[0];
    return fn.reduce(
        (pre,cur)=>
            (...args)=>
                pre(cur(...args))
    );
}