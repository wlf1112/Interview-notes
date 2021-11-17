/**
 * 使用setTimeout模拟setInterval
 * @param {执行函数} fn 
 * @param {延时} t 
 * @returns 
 */
function mySetinterval(fn,t){
    let timer=null;
    function interval(){
        fn();
        timer=setTimeout(interval,t);
    }
    interval();
    return {
        cancel:()=>{
            clearTimeout(timer);
        }
    }
}

let a=mySetinterval(()=>{
    console.log(1);
},1000);