// 计算两个数组的交数组
// 注意：理解题意（不是找出在两数组中都存在的元素）
// 例如：nums1 = [1, 2, 2, 1], nums2 = [2, 2], 返回 [2, 2].

/**
 * Created by zhaoningli on 2017/8/22.
 */
module.exports = function intersection(nums1, nums2) {
    return nums1.map(function (n) {
        let obj = nums2.find(x => x == n);
        if(obj){
            delete nums2[nums2.indexOf(n)];
            return n;
        }
    }).filter(n => n != undefined);
}