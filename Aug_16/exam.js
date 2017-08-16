/**
 * Created by zhaoningli on 2017/8/16.
 */
// 题目：找出数组 arr 中重复出现过的元素
// 例如：arr = [‘a’, ‘ab’, ‘ed’, ‘da’, ‘a’, ‘ed’, ‘b’];输出：‘a’, ‘ed’

function get_rep_items(arr) {
    let ans = [];
    arr.sort();
    for (var i = 0; i < arr.length-1; i++) {
        if(arr[i] == arr[i+1]){
            ans.push(arr[i]);
        }
    }
    return ans.map(x => "'"+x+"'").join(', ');
}

arr = ['a', 'ab', 'ed', 'da', 'a', 'ed', 'b'];
console.log(get_rep_items(arr))
