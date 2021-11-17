/**
 * 实现多维数组变成一维数组
 */

// 递归实现
// function flatten(arr){
//     if(!arr.length) return ;
//     return arr.reduce(
//         (pre,cur)=>
//             Array.isArray(cur)?[...pre,...flatten(cur)]:[...pre,cur],
//             []
//     )
// }

// console.log(flatten([1,[1,2,[3,4]]]));

// 迭代实现
function flatten(arr){
    if(!arr.length) return;
    while(arr.some((item)=>Array.isArray(item))){
        arr=[].concat(...arr)
    }
    return arr;
}

console.log(flatten([1,[1,2,[3,4]]]));