/** 
 * 快速排序基础版
*/
var quickSort=function(arr){
    let len=arr.length;
    if(len<2){
        return arr
    }else{
        let flag=arr[0]
        let left=[],
            right=[];
        for(let i=1,tmp;i<len;i++){
            tmp=arr[i];
            if(tmp<flag){
                left.push(tmp)
            }else{
                right.push(tmp)
            }
        }
        return quickSort(left).concat(flag,quickSort(right))
    }
}

// 测试
quickSort([2,14,6,3,12,8,5,6])

