/**
 * Created by zhaoningli on 2017/9/3.
 */
/**
 * @param {string} s
 * @return {number}
 */

function includes(s, arr){
    var flag;
    for (var i = 0; i < s.length; i++) {
        flag = 1;
        for (var j = 0; j < arr.length; j++) {
            if(s[i+j] != arr[j]){
                flag = 0;
            }
        }
        if(flag){
            return 1;
        }
    }
    return 0;
}

function find(s, arr) {
    if(includes(s, arr)){
        console.log(arr);
        return arr.length;
    }else{
        let ans = 0;
        for (var i = 0; i < arr.length; i++) {
            let tmp = arr[i];
            arr[i] = 0;
            let tmp_arr = [];
            for (let obj of arr) {
                if(obj != 0){
                    tmp_arr.push(obj);
                    let t = find(s, tmp_arr);
                    if(ans < t){
                        ans = t;
                    }
                }
            }
            arr[i] = tmp;
        }
        return ans;
    }
}

var lengthOfLongestSubstring = function(s) {
    var set_arr = Array.from(new Set(Array.from(s)));

    return find(s, set_arr);
};

console.log(lengthOfLongestSubstring("c"));
console.log(lengthOfLongestSubstring("abcabcbb"));
console.log(lengthOfLongestSubstring("bbbbb"));
console.log(lengthOfLongestSubstring("dvdf"));