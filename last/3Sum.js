function is_end(arr) {
    for (var i = 0; i < arr.length-1; i++) {
        if(arr[i] == 1 && arr[i+1] == 0){
            return true;
        }
    }
    return false;

}
function change(arr) {
    for (var i = 0; i < arr.length-1; i++) {
        if(arr[i] == 1 && arr[i+1] == 0){
            arr[i] = 0;
            arr[i+1] = 1;
            var tmp = 0;
            for (var j = 0; j < i; j++) {
                if(arr[j]==1){
                    tmp++;
                }
            }
            for (var j = 0; j < i; j++) {
                if(j<tmp){
                    arr[j] = 1;
                }else{
                    arr[j] = 0;
                }

            }
            break;
        }
    }
}

function solve(nums, arr) {
    let t = []
    for (var i = 0; i < nums.length; i++) {
        if(arr[i] == 1){
            t.push(nums[i]);
        }
    }
    return t;
}

var zuhe = function (nums, n) {
    var ans = [];
    var arr = [];
    for (var i = 0; i < nums.length; i++) {
        if(i < n){
            arr.push(1);
        }else{
            arr.push(0);
        }
    }
    while(is_end(arr)){
        ans.push(solve(nums, arr).sort());
        change(arr);
    }
    ans.push(solve(nums, arr).sort());
    return ans;

}

function check(arr){
    let ans = 0;
    for (var i = 0; i < arr.length; i++) {
        ans += arr[i];
    }
    if(ans == 0){
        return true;
    }else{
        return false;
    }
}

function ans_find(ans, arr2) {
    for (let arr1 of ans) {
        let flag = 1;
        for (var i = 0; i < arr1.length; i++) {
            if(arr1[i] != arr2[i]){
                flag = 0;
                break;
            }
        }
        if(flag){
            return false;
        }
    }
    return true;
}

function find(arr) {
    let ans = [];
    for (var i = 0; i < arr.length; i++) {
        if(check(arr[i])){
            if(ans_find(ans, arr[i])){
                ans.push(arr[i]);
            }
        }
    }
    return ans;
}

var threeSum = function(nums) {
    if(nums.length < 3){
        return [];
    }
    let arr = zuhe(nums, 3);
    return find(arr);
};

let S =[-13,11,11,0,-5,-14,12,-11,-11,-14,-3,0,-3,12,-1,-9,-5,-13,9,-7,-2,9,-1,4,-6,-13,-7,10,10,9,7,13,5,4,-2,7,5,-13,11,10,-12,-14,-5,-8,13,2,-2,-14,4,-8,-6,-13,9,8,6,10,2,6,5,-10,0,-11,-12,12,8,-7,-4,-9,-13,-7,8,12,-14,10,-10,14,-3,3,-15,-14,3,-14,10,-11,1,1,14,-11,14,4,-6,-1,0,-11,-12,-14,-11,0,14,-9,0,7,-12,1,-6];
console.log(threeSum(S));
console.log(threeSum([0]));

/**
 * Created by zhaoningli on 2017/9/5.
 * @param {number[]} nums
 * @return {number[][]}
 */