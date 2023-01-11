//Convert Decimal Number to Binary Number.

const convertDecToBin = (n) => {
    //var quotient;
    var remainder ="";
    var count=1;
    while(count>0){  
        remainder += n%2;
        n = Math.floor(n/2);
        //console.log(remainder)
        n!=0?count++:count=0;
    }
    console.log(remainder.split("").reverse().join(""))
}

//console.log(Math.floor(5/2))

convertDecToBin(20)











