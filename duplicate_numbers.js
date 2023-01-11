//REMOVE ALL DUPLICATE NUMBERS
//filter method
const removeDuplicate = (array) => {
    return arr.filter((item, pos) => {
        return arr.indexOf(item)==pos
    });
}

const arr = [10,5,6,5,7,8,3,7,5,7,9,5,7,7,10] //[10,5,6,7,3,8]

//console.log(removeDuplicate(arr));

//ES6 set method

//console.log([...new Set(arr)])

//using loop method
const arr2 = [];
const method3 = (array) => {
    for(var a = 0;a<array.length;a++){
        // console.log(array.indexOf(array[a]) + " = " + a)
        if(array.indexOf(array[a]) == a){
            arr2.push(array[a])
        } 
    }
    return arr2;
}

//console.log(method3(arr));

//GET ALL DUPLICATE NUMBERS ONLY

//Using filter method and Set()
const newArray = new Set(arr);

const array2 = [];
var duplicateNumbers1 = arr.filter((num) => {
    if(newArray.has(num)){
        newArray.delete(num);
    }else{
        return num;
    }
});

//console.log(new Set(duplicateNumbers1));

//Using loop with indexOf methods
const array3 = [];
const duplicateNumbers2 = array => {
    for(var a = 0; a<array.length;a++){
        // console.log(array.indexOf(array[a]) + " = " + a)
        if(array.indexOf(array[a]) == a){
            array3.push(array[a]);
        }
    }
    
    array3.filter((item, index)=>{
        //console.log(item)
    })
}

//console.log(duplicateNumbers2(arr));

//get duplicate number with loop
const array4 = [];
const duplicateNumbers3 = (array) => {
    for(var a = 0; a<array.length;a++){
        for(var b = a+1;b<array.length;b++){
            if(array[a] == array[b]){
                array4.push(array[a]);
                break;
            }
        }
    }

    return array4.filter((item, pos) => {
        return array4.indexOf(item)==pos
    });
}

//console.log(duplicateNumbers3(arr))

//Method-4, Using reduce method

var duplicateNumbers4 = arr.reduce((preValue, curValue, index, array) => {
    //console.log(preValue + " : " + curValue + " : " + index +": array: "+ array)
    //console.log(array.indexOf(curValue));
    if(array.indexOf(curValue) != index && preValue.indexOf(curValue)<0){
        preValue.push(curValue)
    }
    //preValue.sort(function(a, b){return a-b});
 
    return preValue;
},[])
// console.log(duplicateNumbers4)

//Method-5
arr.map((item,i, array) => {
    //console.log(array.indexOf(item) +" : "+ i)
    if(array.indexOf(item) !== i){
        //console.log(item)
    }
})

// const arrayFruit = ['mango', 'apple', 'banana', 'grapes']

// var fruit = arrayFruit.includes('mango',2)
// console.log(fruit);

//GET THE COUNT OF DUPLICATE NUMBERS, const arr = [10,5,6,5,7,8,3,7,5,7,9,5,7,7,10] e.g 5: 3 times, 7 : 4 times

//Method-1, using loop 
const array5 = arrNew1 = newDup = [];
var count;
const countDuplicateNo1 = (array) => {
    for(var a = 0;a<array.length;a++){
        //console.log(array[a]);
        
        //console.log(array[a])
        for(var b = a+1;b<array.length;b++){
            if(array[a] == array[b]){
                array5.push(array[a]) 
                break;  
            }
        }

        
    }
    newDup = array5.filter((item, pos) => {
        return array5.indexOf(item)==pos
    });
   //console.log(newDup)

    for(var c = 0;c<newDup.length;c++){
         //console.log(newDup[c])
         //count=1;
        for(var d = 0;d<array.length;d++){
            if(newDup[c] === array[d]){
                //console.log(newDup[c] +":"+array[d]);
                // count++;
                var obj = {};
                var num = newDup[c];
                // var value = count;
                // obj[num] = value;
                // arrNew.push(obj);
                //arrNew1.push(newDup[c]) 
                
            }
            
        }
    }
    //console.log(arrNew1) 
   //return arrNew1;
}

//console.log(countDuplicateNo1(arr));
///countDuplicateNo1(arr)

//Method-2, using filter and indexof
const array6 = [];
var count;
const countDuplicateNo2 = (array) => {
    return array.filter((num, index) => {
        //console.log(array.indexOf(num) +"="+index)
        if(array.indexOf(num) !== index){
            return array6.push(num);
        }
    })
}

//console.log(countDuplicateNo2(arr))

//REMOVE DUPLICATE NUMBERS
//New - arr = [10,5,6,5,7,8,3,7,5,7,9,5,7,7,10]
const removeDuplicateNo1 = (array) => {
    const array7 = [];
    return array.filter((item,index) =>{
        if(array.indexOf(item)==index){
           return array7.push(item)
        }
    });
}

//console.log(removeDuplicateNo1(arr))


//GET DUPLICATE NUMBERS - arr = [10,5,6,5,7,8,3,7,5,7,9,5,7,7,10]-[10,5,7]
// const getDuplicateNo2 = (array) => {
//     const array8 = [];
//     return array.filter((item, index) => {
//         if(array.indexOf(item)!==index){
//             return array8.push(item)
//          }
//     }).sort((a,b)=> b-a);
// }

// console.log(getDuplicateNo2(arr))

const getDuplicateNo3 = (array) => {
    const array9 = [];
    return array.reduce((item, value, index, arrRed) => {
        //console.log(arrRed.indexOf(value) + ": "+ index)
        if(arrRed.indexOf(value) !== index){
            item.push(value)
         }
        return item;
    },[]).filter((num, i, arrfil)=>{ 
        if(arrfil.indexOf(num)==i){
            return array9.push(num)
        }
       //console.log(array.indexOf(num) +"="+i +": "+arrfil)
    });
}

//console.log(getDuplicateNo3(arr))

//
const anyFunction = (n)=>{
    for(var a = 1;a<=n;a++){
        if(a%3 == 0 && a%5 == 0){
            console.log("FizzBuzz")
        }else{
            if(a%3 == 0){
                console.log("Fizz")
             }else{
                
                if(a%5==0){
                    console.log("buzz")
                }else{
                    console.log(a)
                }
             }
        }   
    }
}

anyFunction(15);


