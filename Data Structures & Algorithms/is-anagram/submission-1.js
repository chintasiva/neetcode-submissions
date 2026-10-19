class Solution {
    /**
     * @param {string} s
     * @param {string} t
     * @return {boolean}
     */
    isAnagram(s, t) {
        // if(s.length != t.length) return false
        // let sortedS = s.split("").sort().join("");
        // let sortedT = t.split("").sort().join("")
        // if(sortedS == sortedT){
        //     return true
        // }else{
        //     return false
        // }
        if(s.length !== t.length) return false
       let obj ={}
       for(let i=0;i<=s.length-1 ; i++){
        obj[s[i]] = (obj[s[i]] || 0 ) +1
        obj[t[i]] = (obj[t[i]] || 0) -1
       }
       console.log(obj)
       for(let char in obj){
        if(obj[char]!==0){
            return false
        }
       }
       return true
    }
}
