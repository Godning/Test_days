/**
 * Created by zhaoningli on 2017/8/17.
 */

const exam= require('./exam.js');

// import median from "./median.js";

describe("SquareElement",function(){
    it("test1", function() {
        let str = 'abcsbaddbizdbas';
        let result = {b :4};
        console.log(str);
        console.log(result);
        expect(exam(str)).toEqual(result);
    });

    it("test2", function() {
        let str = 'aaaaabbdbdbb';
        let result = {a :5, b :5};
        console.log(str);
        console.log(result);
        expect(exam(str)).toEqual(result);
    });
});
