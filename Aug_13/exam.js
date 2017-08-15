/**
 * Created by zhaoningli on 2017/8/15.
 */

// 给定一个未排序的整数数组，找到其中位数。
function get_mid_num(arr){
    arr.sort();
    if(arr.length % 2 == 0){
        let num1 = arr[Math.floor(arr.length/2)];
        let num2 = arr[Math.floor(arr.length/2)-1];
        return (num1 + num2) /2;
    }else{
        return arr[Math.floor(arr.length/2)];
    }
}

let arr = [[1,2,3,4,5,4],[1,2,3,4],[1],[1,2,3]];
for (var i = 0; i < arr.length; i++) {
    var obj = arr[i];
    console.log(get_mid_num(obj));
}

