// //和为S的两个数字
// function FindNumbersWithSum(array, sum)
// {
//     let a
//     let b
//     for(let i =0;i<array.length;i++){
//         let array2 = [...array]
//         array2.splice(i,1)
//         let exp = sum-array[i]
//         let low = 0
//         let high =array2.length-1
//         while(low<=high){
//             debugger
//             let mid = Math.floor((high+low)/2)
//             if(array2[mid]==exp){
//                 if(!a&&!b){
//                     a = array[i]
//                     b = exp
//                 }
//                 else{
//                     if(a*b>array[i]*exp){
//                         a = array[i]
//                         b = exp
//                     }
//                     else break
//                 }
//             }
//             else if(array2[mid]<exp){
//                 low = mid+1
//             }
//             else if(array2[mid]>exp){
//                 high =mid-1
//             }
//             else break
//         }

//     }
//      if(!a&&!b) return Array()
//      else return Array(a,b)
// }
// console.log(FindNumbersWithSum([1,2,4,7,11,15],15));

function FindNumbersWithSum(array, sum){
    let low =0
    let high =array.length-1
    let list=[]

    while(low<high){
        let cur = array[low] +array[high]
        debugger
        if(cur<sum){
            low++
        }
        else if(cur>sum){
            high--
        }
        else{
            list.push(array[low])
            list.push(array[high])
            break
        }

    }
    return list


}
console.log(FindNumbersWithSum([1,2,4,7,11,15],15));