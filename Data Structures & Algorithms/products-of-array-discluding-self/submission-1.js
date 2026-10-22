class Solution {
    /**
     * @param {number[]} nums
     * @return {number[]}
     */
    productExceptSelf(nums) {
        let result =new Array(nums.length);
        console.log(result)

        let prefix =1

        for(let i=0;i<nums.length; i++){
            result[i]=prefix
            prefix*=nums[i]
        }

        console.log(result)

        let sufix = 1

        for(let i=nums.length-1;i>=0;i--){
            result[i]*=sufix
            sufix*=nums[i]
        }
        // console.log(result)
        return result
    }
}
