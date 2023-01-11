//Multiplication table

const multiplicationTable = (num, times) => {
    const arr = []
    for(var a = 1;a<=times;a++){
        //console.log(num + " x " + a + " = " + num * a);
        arr.push(num + " x " + a + " = " + num * a)
    }
    return arr
}

console.log(multiplicationTable(4, 10));