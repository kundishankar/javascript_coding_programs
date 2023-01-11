//get all the prime numbers - 2,3,5,7,11,13,17,19,23

function checkPrime(num){
    for(var a=2;a<num;a++){
        if(num%a==0){
            return false;
        }
    }
    return true;
}

function getAllPrimeNo(num){
    const arr1 = [];
    for(var a = 2;a<=num;a++){
        if(checkPrime(a)){
            arr1.push(a)
        }
    }
    return arr1;
}

console.log(getAllPrimeNo(20))
//console.log(checkPrime(11))