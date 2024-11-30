/**
*@param {number[]} nums1
*@param {number[]} nums2
*@return {number}
*/
    a = [1, 3]
    b = [2]
var findMedianSortedArrays = function(nums1, nums2) {
// Brute force Approach: Merging using Extra space
// sort both arrays

    const merge = [...nums1, ...nums2].sort((a, b) => a - b );
    const mid = Math.floor(merge.length / 2);
    if (merge.length % 2 == 0)  return (merge[mid - 1] + merge[mid]) / 2;
        return merge[mid];
};

console.log(findMedianSortedArrays(a, b))
