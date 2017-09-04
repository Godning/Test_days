/**
 * Created by zhaoningli on 2017/9/4.
 */
/**
 * @param {number[]} nums1
 * @param {number[]} nums2
 * @return {number}
 */

function merge(nums1, nums2) {
    var arr = [];
    var i=0 ,j = 0;
    while(i<nums1.length && j<nums2.length){
        if(nums1[i] < nums2[j]){
            arr.push(nums1[i]);
            i++;
        }else{
            arr.push(nums2[j]);
            j++;
        }
    }
    for (var k = i; k < nums1.length; k++) {
       arr.push(nums1[k]);
    }
    for (var k = j; k < nums2.length; k++) {
        arr.push(nums2[k]);
    }
    return arr;
}

function find(arr) {
    var len = arr.length;
    if(len % 2 == 0){
        var ans = (arr[len/2-1] + arr[len/2])/2;
        return ans;
    }else{
        return arr[Math.floor(len/2)];
    }
}

var findMedianSortedArrays = function(nums1, nums2) {
    var arr = merge(nums1, nums2);
    //console.log(arr);
    return find(arr);
};

let nums1 = [1, 3];
let nums2 = [2, 4];

console.log(findMedianSortedArrays(nums1, nums2));