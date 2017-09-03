/**
 * Created by zhaoningli on 2017/9/3.
 */
/**
 * @param {number} x
 * @return {number}
 */
var reverse = function(x) {
    var flag = 1;
    if(x < 0){
        flag = -1;
        x = flag * x;
    }
    var arr = [];
    while(x > 0){
        arr.push(x % 10);
        x = Math.floor(x / 10);
    }
    var ans = 0;
    for(var i = 0;i< arr.length;i++){
        ans += arr[i] * Math.pow(10, arr.length-i-1);
    }
    return outofnum(ans * flag);
};

function outofnum(x){
    if(x > 2147483647 || x < -2147483648){
        return 0;
    }else{
        return x;
    }
}