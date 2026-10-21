class Solution {
    /**
     * @param {number[]} nums
     * @param {number} k
     * @return {number[]}
     */
    topKFrequent(nums, k) {
        let obj = new Map();

        for(let num of nums){
            obj.set(num,(obj.get(num)||0)+1)
        }

        console.log(obj)

        let buckets = Array.from({length: nums.length+1},()=>[])

        console.log(buckets)

        for(let [num,freq] of obj){
            buckets[freq].push(num)
        }

        let result = [];

        for(let freq = buckets.length-1; freq>=1; freq--){
            for(let num of buckets[freq]){
                result.push(num);

                if(result.length == k){ return result}
            }
        }

    }
}
