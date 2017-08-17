/**
 * Created by zhaoningli on 2017/8/17.
 */

const exam= require('./exam.js');

// import median from "./median.js";

describe("SquareElement",function(){
    it("test", function() {
        let arr = [5, 3, 7, 1];
        let result = [25, 9, 49, 1];
        console.log(arr);
        console.log(result);
        expect(exam(arr)).toEqual(result);
    });
});
