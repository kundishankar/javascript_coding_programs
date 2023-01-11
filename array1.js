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
console.log(12+12+"25" + 30+15);

var removeElement = function(nums, val) {
    var nArr = [];
    for(var a = 0;a<nums.length;a++){
        if(nums[a] != val){
            nArr.push(nums[a])
        }
    }
    return nArr;
};

arr= [0,1,2,2,3,0,4,2]
console.log(removeElement(arr,2))






