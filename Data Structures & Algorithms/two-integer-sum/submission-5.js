class Solution {
    /**
     * @param {number[]} nums
     * @param {number} target
     * @return {number[]}
     */
    twoSum(nums, target) {
    let obj= new Map();

    for(let i=0;i<nums.length;i++){
        let result = target-nums[i]
       if(obj.has(result)){
        return [obj.get(result),i]
       }else{
        obj.set(nums[i],i)
       }
    }

    }
}
