//统计一个数字在升序数组中出现的次数。

function GetNumberOfK(data, k)
{
    let low =0
    let high = data.length-1
    let flag =0
    while(low<=high){
        let mid = Math.floor((high+low/2))
        debugger
        if(data[mid]==k) {
            flag++
            data.splice(mid,1)
            high = high-1
        }
                      
        else if(data[mid]<k)
            low = mid +1
        else if(data[mid]>k)
            high =mid -1
        else break
        
        

    }
    return flag
}
console.log(GetNumberOfK([1,2,3,3,3,3],3));