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
        ans.push(solve(nums, arr));
        change(arr);
    }
    ans.push(solve(nums, arr));
    return ans;

}

console.log(zuhe([1,2,3,4,5], 3))