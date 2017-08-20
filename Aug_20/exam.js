// 在数组 arr 中，查找值与 item 相等的元素出现的所有位置
// 例如：arr = [1, 3, 7, 1 ,4,] , item = 1，输出：0, 3
// 要求：不要使用for，while循环
function build_ans(result) {
    let ans = {};
    for (var i = 0; i < result.length-1; i++) {
        let obj = result[i];
        ans[obj.key] = obj.count;
        if(result[i].count > result[i+1].count){
            break;
        }
    }
    return ans;
}
/**
 * Created by zhaoningli on 2017/8/18.
 */
module.exports = function find(arr) {
    let result = [];
    for (let n of arr) {
        let obj = result.find(x => x.key == n);
        if (obj) {
            obj.count++;
        } else {
            result.push({ key : n, count : 1});
        }
    }
    result.sort(function (o1, o2) {
        return o2.count - o1.count;
    });
    return build_ans(result);
}