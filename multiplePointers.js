function countUniqueValues(inputArr){
    if(!inputArr.length){
      return 0
    }
    let i = 0
    let result = []
    result.push(inputArr[0])
  console.log(result)
  while(i < inputArr.length-1){
      if(inputArr[i] !== inputArr[i+1]) {
        result.push(inputArr[i+1])
      }
      i++
  }
    console.log(result)
    return result.length
}

// countUniqueValues([1,1,1,1,2,3,4,4,4,7,7,12,13])
countUniqueValues([])