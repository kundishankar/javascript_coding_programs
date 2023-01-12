//Given an array of integers, calculate the ratios of its elements that are positive, negative, and zero. Print the decimal value of each fraction on a new line with  places after the decimal.

// Note: This challenge introduces precision problems. The test cases are scaled to six decimal places, though answers with absolute error of up to  are acceptable.

// Example

// There are  elements, two positive, two negative and one zero. Their ratios are ,  and . Results are printed as:

// 0.400000
// 0.400000
// 0.200000

var arr = [1,2,3, -1, -2, -3, 0, 0];

const plusMinus = (ar) => {
    var posNum = 0;
    var negNum = 0;
    var zeroNum = 0;
    // return ar.filter((item) => {
    //     if(item>0){
    //         return item;
    //     }
    // }).length/ar.length;
    for(var a=0;a<ar.length;a++){
        if(ar[a]>0){
            posNum +=1;
        }
    }
    var z = posNum/ar.length;

    for(var b=0;b<ar.length;b++){
        if(ar[b]<0){
            negNum +=1;
        }
    }
    var x = negNum/ar.length;

    for(var c=0;c<ar.length;c++){
        if(ar[c]==0){
            zeroNum +=1;
        }
    }
    var y = zeroNum/ar.length;
    return z.toFixed(6) + "\n" + x.toFixed(6) +"\n"+ y.toFixed(6);
//    console.log(z.toFixed(6))
//    console.log(x.toFixed(6))
//    console.log(y.toFixed(6))
}

console.log(plusMinus(arr));