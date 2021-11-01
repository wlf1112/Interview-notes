/** 
 * 数组遍历的方法
*/

var arr=[1,2,3,4,5];

// forEach不改变原数组，没有返回值
arr.forEach((item,index,arr)=>{
    console.log(`${index}:${item}`);
})

// map会返回一个新数组,数组的元素为原始数组元素调用函数处理后的值。不会改变原数组
arr.map(ele=>{
    return ele+1
})

// filter用于过滤数组，满足条件的元素会被返回。会返回新数组，不会改变原数组
arr.filter(item=>item>2);

// 可以使用filter()方法移除数组中的undefined、null、NaN等值
let arr1=[1,undefined,2,null,3,false,4];
arr1.filter(Boolean);   //[1,2,3,4]

// every对数组中的每一项进行遍历，只有所有元素都符合条件，才返回true
arr.every(item=>item>1);    //false

// some对数组中的每一项进行遍历，只要有一个元素符合条件，就返回true，否则返回false
arr.some(item=>item>1);     //true

// find返回第一个符合条件的值；findIndex返回第一个符合条件的值的索引值
arr.find(item=>item>1);    //2
arr.findIndex(item=>item>1);  //1

// reduce和reduceRight
/**
 * reduce参数：
 *  prev:上一次调用回调返回的值，或者提供的初始值
 *  cur:数组当前被处理的元素
 *  index:当前元素在数组中的索引
 * 总结：如果没有提供initialValue，reduce会从索引1的地方开始执行
 *      callback方法，跳过第一个索引。如果提供了initialValue，
 *      从索引0开始。
 * 注意：如果该方法添加初始值，就会改变原来数组
 */
var sum=arr.reduce((prev,cur,index,arr)=>{
    console.log(prev,cur,index);
    return prev+cur;
})

//带有初始值
var sum1=arr.reduce((prev,cur,index,arr)=>{
    console.log(prev,cur,index);
    return prev+cur;
},5)
