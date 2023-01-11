// print Right angled triangle

// const rightTriangle = (n) => {
//     var str = "";
//     for(var a = 1;a<=n;a++){
//         for(var b = 1;b<=a;b++){    
//             str+="*";
            
//         }
//         str += "\n"
//     }
//     console.log(str);
// }

//rightTriangle(6)

// print Right angled triangle

// const rightTriangleDown = (n) => {
//     var str = "";
//     for(var a = 0;a<=n;a++){  
//         //console.log("*")
//         for(var b = 1;b<=n-a;b++){    
//             str+="*";  
//         }
//         str += "\n"
//     }
//     console.log(str);
// }

//rightTriangleDown(5)

// print Square

// const square = (n) => {
//     var str = "";
//     for(var a = 1;a<=n;a++){  
//         //console.log("*")
//         for(var b = 1;b<=n;b++){    
//             str+=" *";  
//         }
//         str += "\n"
//     }
//     console.log(str);
// }

// square(5)

//print rectangle
// const rectangle = (length, breadth) => {
//     var str = "";
//     for(var a = 1;a<=breadth;a++){  
//         //console.log("*")
//         for(var b = 1;b<=length;b++){    
//             str+=" *";  
//         }
//         str += "\n"
//     }
//     console.log(str);
// }

// rectangle(10,3)

//left angled traingle

// const leftTraingle = (n) => {
//     var str = "";
//     for(var a = 0;a<n;a++){  
//         //console.log("*")
//         for(var b = 0;b<n;b++){  
//             if(b>=n-a-1){
//                 str+="*";
//             }else{
//                 str+=" ";
//             }    
//         }
//         str += "\n"
//     }
//     console.log(str);
// }

// leftTraingle(5)

//left angled traingle Down

// const leftTraingleDown = (n) => {
//     var str = "";
//     for(var a = 0;a<n;a++){  
//         //console.log("*")
//         for(var b = 0;b<n;b++){  
//             if(b<a){
//                 str+=" ";
//             }else{
//                 str+="*";
//             }    
//         }
//         str += "\n"
//     }
//     console.log(str);
// }

// leftTraingleDown(5)

// Equilateral traingle
// const equilateralTriangle = (n) => {
//     var str = "";
//     for(var a = 1;a<=n;a++){  
//         //console.log("*")
//         for(var b = 1;b<=2*n-1;b++){  
//             if(b>=2*n-a){
//                 str+=" *";
//             }else{
//                 str+=" ";
//             }
             
//         }
//         str += "\n"
//     }
//     console.log(str);
// }

// equilateralTriangle(5)

// function staircase(n) {
//     // Write your code here
//     let output = ""
//     for (let i = 1; i <= n; i++) {
//       output += " ";
//     }
//     for (let i = 1; i <= n; i++) {
//       output = output.slice(1, output.length);
//       output += "#";
//       console.log(output)
//     }
//   }
//   staircase(10)

//

var blink = function (n) {
    var str = "";
    for(var a = 1;a<=n;a++){ 
        str+=" *"
        //console.log(str+=" *"); 
        //timer = a*1000; 
        //str+=" *";
        // setTimeout(()=>console.log(str+=" *"), timer)
    }
    console.log(str);
 }
//blink(5);
// setInterval(blink, 3000)






