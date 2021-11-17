/**
 * 
 * @param {执行函数} fn 
 * @param {计时} time 
 */
const mySetTimeout=(fn,time)=>{
    const timer=setInterval(()=>{
        clearInterval(timer);
        fn();
    },time);
}

mySetTimeout(()=>{
    console.log(1);
},1000)