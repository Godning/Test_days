/**
 * Created by zhaoningli on 2017/9/4.
 */
/**
 * @param {number[]} height
 * @return {number}
 */
function max(a, b) {
    if(a>b){return a;}else{return b;}
}
function min(a, b) {
    if(a<b){return a;}else{return b;}
}
var maxArea = function(height) {
    var maxarea = 0, l = 0, r = height.length - 1;
    while (l < r) {
        maxarea = max(maxarea, min(height[l], height[r]) * (r - l));
        if (height[l] < height[r])
            l++;
        else
            r--;
    }
    return maxarea;
};