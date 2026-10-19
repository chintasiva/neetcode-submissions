class Solution {
    /**
     * @param {number[]} nums
     * @return {boolean}
     */
    hasDuplicate(nums) {
        // let i = 0
        // let j = nums.length-1
        // while(i<j){
        //     if(nums[i]!==nums[j]){
        //         i++
        //         j--
        //     }
        //     if(nums[i]==nums[j]){
        //         return true
        //     }else{
        //         return false

        //     }
           
        // }
        let newArray = new Set(nums)
        if(newArray.size !== nums.length){
            return true
        }else{
            return false
        }
        // console.log(nums.length)
        // console.log(newArray.size)
    }
}
