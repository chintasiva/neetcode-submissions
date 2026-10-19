class Solution {
    /**
     * @param {number[]} nums
     * @return {boolean}
     */
    hasDuplicate(nums) {
        let newArray = new Set(nums)
        if(newArray.size !== nums.length){
            return true
        }else{
            return false
        }
    }
}
