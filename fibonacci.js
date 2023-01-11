//fibonacci series - 0,1,1,2,3,5,8,13

// function getFibonacci(n){
//     var arr1 = [0,1]
//     var iniArrCount = arr1.length;
//     for(var a=0;a<n-iniArrCount;a++){
//         arr1.push(arr1[a]+arr1[a+1])
//     }
//     console.log(arr1)
// }

// getFibonacci(10)

function getFibonacciWhile(n){
    var arr1 = [0,1]
    var iniArrCount = arr1.length;
    var a = 0;
    while(a < n-iniArrCount){
        arr1.push(arr1[a]+arr1[a+1])
        a++
    }
    console.log(arr1)
}

getFibonacciWhile(10)