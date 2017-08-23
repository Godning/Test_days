/**
 * Created by zhaoningli on 2017/8/20.
 */

const expand= require('./expand');

// import median from "./median.js";

describe("Array_expand",function(){
    it("test1", function() {
        let arr = [1,2,[1,2]];
        let result = [1,2,1,2];
        expect(expand(arr)).toEqual(result);
    });

    it("test2", function() {
        let arr = [1,2,[1,2],[3,4]];
        let result = [1,2,1,2,3,4];
        expect(expand(arr)).toEqual(result);
    });

    it("test3", function() {
        let arr = [4,[3,[2,[1]]]];
        let result = [4,3,2,1];
        expect(expand(arr)).toEqual(result);
    });
});
