/**
 * Created by zhaoningli on 2017/8/20.
 */

const intersection= require('./intersection');

// import median from "./median.js";

describe("Array_intersection",function(){
    it("test1", function() {
        let nums1 = [1, 2, 2, 1];
        let nums2 = [2, 2];
        let result = [2, 2];
        expect(intersection(nums1, nums2)).toEqual(result);
    });

    it("test2", function() {
        let nums1 = [1,1,2,1,2,2];
        let nums2 = [1,2,2];
        let result = [1,2,2];
        expect(intersection(nums1, nums2)).toEqual(result);
    });

    it("test3", function() {
        let nums1 = [1,2,3,4,5,6,7,8,9];
        let nums2 = [1,2,3,4,0,0,6,7,8,9];
        let result = [1,2,3,4,6,7,8,9];
        expect(intersection(nums1, nums2)).toEqual(result);
    });

});
