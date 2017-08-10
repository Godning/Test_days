/**
 * Created by zhaoningli on 2017/8/10.
 */
// 题目：给出2*n + 1 个的数字(数组)，除其中一个数字之外其他每个数字均出现两次，找到这个数字。
// eg: function findNum(arr){ ... }
function findNum(arr) {
    for (var i = 0; i < arr.length; i++) {
        var flag = 1;
        var obj = arr[i];
        for (var j = 0; j < arr.length; j++) {
            var obj1 = arr[j];
            if(obj == obj1 && i != j){
                flag = 0;
                break;
            }
        }
        if(flag){
            return obj;
        }
    }
}

var arr = [1,2,2,1,4,3,4,5,5,6,6,7,3]
console.log(findNum(arr));

//start :   2:02
//end   :   2:10