class Solution {
    /**
     * @param {number[]} nums
     * @param {number} target
     * @return {number[]}
     */
    twoSum(nums, target) {
        let object = new Map();

        for(let i=0;i<nums.length;i++){
            let result = target-nums[i]
            if(object.has(result)){
                // console.log(object.get(result))
                return [object.get(result),i]
            }else{
                object.set(nums[i],i)
                // console.log(object)
            }
        }

    }
}
