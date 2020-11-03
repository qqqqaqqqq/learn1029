//二维数组中的查找
// function Find(target, array)
// {
//     for(let i =0;i<array.length;i++){
//         for(let j =0;j<array[i].length;j++){
//             if(array[i][j] ==target){
//                 return true
//             }
            
//         }
        
//     }
//     return false
// }
// console.log(Find(7,[[1,2,8,9],[2,4,9,12],[4,7,10,13],[6,8,11,15]])
// );

function Find(target,arr){
    for(let i=0;i<arr.length;i++){
        let low =0
        let high =arr[i].length-1
        while(low<=high){
            let mid = parseInt((low+high)/2)
            
            if(target>arr[i][mid]) 
                low =mid+1
            else if(target<arr[i][mid])
                high =mid-1
            else return true
           
        }
    }
        return false
}
console.log(Find(1,[[1,2,8,9],[2,4,9,12],[4,7,10,13],[6,8,11,15]])
);

