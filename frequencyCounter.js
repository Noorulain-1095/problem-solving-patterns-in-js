function isAnagrams(arg1,arg2){
    if(arg1.length !== arg2.length){
        return false
    }
    let obj1 = {}
    let obj2 = {}
    for(let i of arg1) {
        obj1[i] = (obj1[i] || 0) + 1
    }
    for(let i of arg2) {
        obj2[i] = (obj2[i] || 0) + 1
    }
    console.log(obj1)
    console.log(obj2)
    for(let i in obj1){
        if(!(i in obj2) || obj1[i] !== obj2[i]){
            return false
        }
    }
    return true
}


isAnagrams('anagram','nagaram')

