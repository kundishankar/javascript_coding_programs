//swapping two numbers

function swapping(a,b){
    console.log("a value is " + a +" \n"+ "b value is " + b);
    var temp = b
    b=a
    a=temp
    console.log("after swapping \na value is " + a +" \n"+ "b value is " + b);
}

// swapping(5,4)

//swapping two numbers without 3rd variable

function swappingwithoutVariable(a,b){
    console.log("a value is " + a +" \n"+ "b value is " + b);
    a = a + b;
    b = a - b;
    a = a - b
    console.log("after swapping \na value is " + a +" \n"+ "b value is " + b);
}

// swappingwithoutVariable(6,9)

//Method-3

function swappingMethod3(a,b){
    console.log("a value is " + a +" \n"+ "b value is " + b);
    [b,a] = [a,b]
    console.log("after swapping \na value is " + a +" \n"+ "b value is " + b);
}

swappingMethod3(12,5)
