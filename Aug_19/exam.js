// 在数组 arr 中，查找值与 item 相等的元素出现的所有位置
// 例如：arr = [1, 3, 7, 1 ,4,] , item = 1，输出：0, 3
// 要求：不要使用for，while循环
/**
 * Created by zhaoningli on 2017/8/19.
 */
module.exports = function find(arr) {

    return Array.from(new Set(arr));
}