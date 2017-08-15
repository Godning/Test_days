/**
 * Created by zhaoningli on 2017/8/15.
 */
// 题目：统计数组 arr 中值等于 item 的元素出现的次数
// 例如：arr = [1, 3, 7, 1 ,4,] , item = 1,item出现的次数为2
// 要求：不要使用for循环

function find_nums(arr, item){
    return arr.reduce(function (total, num) {
       if(num == item){
           return total + 1;
       }else{
           return total;
       }
    }, 0);
}

let arr = [1, 3, 7, 1 ,4,];
console.log(find_nums(arr, 1));