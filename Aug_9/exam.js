/**
 * Created by zhaoningli on 2017/8/9.
 */
// 所谓的斐波纳契数列是指：
// 前2个数是 0 和 1 。
// 第 i 个数是第 i-1 个数和第i-2 个数的和。
// 斐波纳契数列的前10个数字是：
// 0, 1, 1, 2, 3, 5, 8, 13, 21, 34 …
let ans = function (x) {
    let arr = [0,1];
    for (var i = 2; i <= x; i++) {
        arr.push(arr[i-1]+arr[i-2]);
    }
    return arr[x-1];
}

for (var i = 1; i < 11; i++) {
    console.log(ans(i));
}

console.log(ans(112));

//start :   2:02
//end   :   2:07