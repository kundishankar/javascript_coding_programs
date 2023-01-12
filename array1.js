//Removing specific element from the array
// const arr = [3,5,6,10,20]
// arr.splice(arr.indexOf(5),1)
// console.log(arr)

//Adding specific element from the array
// const arr1 = [3,5,6,10,20,23,30,54]
// arr1.splice(arr1.indexOf(10),0, 15)
// console.log(arr1)

//Replacing the first occurance of the specific element from the array 
// const arr1 = [3,5,6,10,20,23,30,54,23]
// arr1.splice(arr1.indexOf(23),1, 90)
// console.log(arr1)

//Replacing the all occurance of the specific element from the array 
// const arr1 = [3,5,6,10,20,23,30,54,23]
// arr1.map((item,i,arr)=>{
//     arr.splice(arr.indexOf(23),1,90);
// })
// console.log(arr1)

//Get Maximum number from an array using Math function
// const arr1 = [3,5,6,10,20,23,30,54,23]
//console.log(Math.min.apply(null,arr1));//same for max also like Math.max.apply(null, arr1);

//addition of string
// console.log(12+12+"25" + 30+15);

// var removeElement = function(nums, val) {
//     var nArr = [];
//     for(var a = 0;a<nums.length;a++){
//         if(nums[a] != val){
//             nArr.push(nums[a])
//         }
//     }
//     return nArr;
// };

// arr= [0,1,2,2,3,0,4,2]
// console.log(removeElement(arr,2))

//addition of all elements inside array
//var arr12= [1,2,3,4,10,11]

// function simpleArrSum(ar){
//     var b=0;
//     for(var a = 0; a<ar.length;a++){
//         b+=ar[a];
//     }
//     return b;
// }

// function simpleArrSum1(ar){
//     return ar.reduce((pre, cur) => {
//         // console.log(pre + " : "+ cur);
//         return pre += cur;
//     })
// }

// console.log(simpleArrSum1(arr12))

//comapring two arrays and return their values
// var a = [5,6,7, 4];
// var b = [3,6,10, 2];

// function compareTriplets(a, b) {
//     var res = [];
//     var k=0;
//     var m=0;
//     for(var x=0;x<a.length;x++){
//         // for(var y=0;y<b.length;y++){
//        // console.log(a[x] + " > "+ b[x]);
//         if(a[x] > b[x]){
//             k+=1;
//         }
//         if(a[x] < b[x]){
//             m+=1;
//         }
            
//         // }
//     }
//     console.log(k,m)
// }

// console.log(compareTriplets(a, b))

///
// Complete the 'diagonalDifference' function below.
// *
// * The function is expected to return an INTEGER.
// * The function accepts 2D_INTEGER_ARRAY arr as parameter.
// */
var arr=[];
var A = [   [1,2,3],
            [4,5,6],
            [9,8,9] ]
//console.log(array)
var N = 3;
function diagonalDifference(A) {
   // Write your code here
    //get diagonal elements from left to right
    var ld = 0;
    var rd = 0;
    for(var a=0;a<N;a++){
        for(var b=0;b<N;b++){
            if(A[a] == A[b]){
                //console.log(A[a][b])
                ld += A[a][b];
            }
        }

        A[a].reverse();
        //console.log(A[a]);
        for(var b=0;b<N;b++){
            if(A[a] == A[b]){
                //console.log(A[a][b])
                rd += A[a][b];
            }
        }
    }

    // for(var c=0;c<N;c++){
    //     console.log(A[c].reverse());
    // }
    //console.log(ld, rd)
    return Math.abs(ld - rd);
}

console.log(diagonalDifference(A));

//reversing the elements of an 1D array
//var arr2 = [[3,4,8,5],[1,4,5,7]];
//console.log(arr2.reverse());

//console.log(arr2.sort((a,b) => b-a));











