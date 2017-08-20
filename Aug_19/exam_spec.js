/**
 * Created by zhaoningli on 2017/8/19.
 */

const exam= require('./exam.js');

// import median from "./median.js";

describe("SquareElement",function(){
    it("test", function() {
        let arr = ['s', 'a', 's', 'b', 'a',1,'1',1];
        let result = ['s', 'a', 'b',1,'1'];
        console.log(arr);
        console.log(result);
        expect(exam(arr)).toEqual(result);
    });
});
