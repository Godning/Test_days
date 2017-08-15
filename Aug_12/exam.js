/**
 * Created by zhaoningli on 2017/8/15.
 */
// 题目: 打印出所有的"水仙花数"，所谓"水仙花数"是指一个三位数，其各位数字立方和等于该数本身。
// 例如：153是一个"水仙花数"，因为153=1的三次方＋5的三次方＋3的三次方。

function x3(num) {
    return num * num * num;
}

function is_waterflower(i) {
    let num1 = Math.floor(i / 100);
    let num2 = Math.floor((i % 100) /10);
    let num3 = i % 10;
    if(x3(num1) + x3(num2) + x3(num3) == i){
        return true;
    }else{
        return false;
    }
}

function print_num(){
    for (var i = 100; i < 1000; i++) {
        if(is_waterflower(i)){
            console.log(i);
        }
    }
}

print_num();