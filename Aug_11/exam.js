/**
 * Created by zhaoningli on 2017/8/11.
 */
// 题目：给出链表 1->2->3->3->4->5->3, 和 val = 3, 你需要返回删除3之后的链表：1->2->4->5。
// function XXX(str,val){}

function build_str(new_arr) {
    let str = "";
    for (var i = 0; i < new_arr.length-1; i++) {
        str += new_arr[i];
        str += "->";
    }
    str += new_arr[new_arr.length-1];
    return str;
}

function delete_node(str, val) {
    let arr = str.split('->');
    let new_arr = [];
    for (let obj of arr) {
        if(Number(val) == obj){
            continue;
        }else{
            new_arr.push(obj);
        }
    }
    if(new_arr.length>0){
        return build_str(new_arr);
    }else{
        return "";
    }

}
console.log(delete_node("",3));
console.log(delete_node("1->2->3->3->4->5->3",3));
console.log(delete_node("3->3->3->3->4->3->3",3));
console.log(delete_node("3->3->3->3->3->3->3",3));

//start :   2:05
//end   :   2:14