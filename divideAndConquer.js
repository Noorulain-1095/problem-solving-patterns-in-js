function binarySearch(arr,value){
  // add whatever parameters you deem necessary - good luck!
  if(arr.length === 0) return -1
  let mid = parseInt(arr.length/2)
  let pointer1 = 0
  let pointer2 = arr.length
    for(let i=pointer1;i<=pointer2;i++){
        if(arr[i] === value){return i}
        if(value < arr[mid] ) {
            pointer2 =  mid
        }else{
            pointer1 = mid
        }
        mid = parseInt(pointer1 + pointer2 /2)
    }
  return -1
}

binarySearch([1,3,4,8,14,15,20],8)
// binarySearch([1,2,3,4,5],5)
