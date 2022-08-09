function maxSubArraySum(arr,num){
    let max = 0
    let temp = 0
    if(arr.length < num){
        return null
    }
    for(let i=0;i<num;i++){
        temp += arr[i]
    }
    max = temp
    for(let i = num;i<arr.length+num-1;i++){
        temp = temp + arr[i] - arr[i-num]
        if(temp > max){
            max = temp
        }
    }
    console.log(max)
    return max
}
maxSubArraySum([1,2,5,2,8,1,5],2)
maxSubArraySum([2,6,9,2,1,8,5,6,3],3)
maxSubArraySum([4,2,1,6],1)
maxSubArraySum([4,2,1,6,2],4)
maxSubArraySum([],4)