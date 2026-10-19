class Solution {
    /**
     * @param {string[]} strs
     * @return {string[][]}
     */
    groupAnagrams(strs) {
        let arr=[]
        let obj=new Map()
        for(let i=0;i<strs.length;i++){
            if(obj.has(strs[i].split("").sort().join(""))){
                obj.get(strs[i].split("").sort().join("")).push(strs[i])
            }else{
            obj.set(strs[i].split("").sort().join(""),[strs[i]])
            }
        }
console.log(obj)
        for(let ele of obj.values()){
            arr.push(ele)
            // console.log(ele)
        }
        return arr
    }
}
