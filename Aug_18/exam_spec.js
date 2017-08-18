/**
 * Created by zhaoningli on 2017/8/17.
 */

const exam= require('./exam.js');

// import median from "./median.js";

describe("SquareElement",function(){
    it("test", function() {
        let arr = [1, 3, 7, 1 ,4,];
        let item = 1;
        let result = "0, 3";
        console.log(arr);
        console.log(result);
        expect(exam(arr, item)).toEqual(result);
    });
});
