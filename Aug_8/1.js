//分解质因数 90 : 2335

function zhi(x) {
    for(let j = 2; j < x; j++) {
        if(x % j == 0){
            return false;
        }
    }
    return true;
}

function cut(x) {
    if(x == 2){
        return "2";
    }
    if(x < 2){
        return "";
    }
    for (let i = x; i > 1; i--) {
        if(zhi(i) && x % i == 0){
            return cut(x/i)+i;
        }
    }
}

let ans = function (x) {
    console.log(x+"="+cut(x));
}

ans(90);
ans(9090);
ans(2);
ans(3);

//start :   2:20
//end   :   2:32