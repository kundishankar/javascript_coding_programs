const checkPalindrome = (str) => {
    //console.log(str + " = " + str.split("").reverse().join(""));
    //console.log(Math.floor(str.length/2))
    // console.log(str.substr(0,Math.floor(str.length/2)))
    // console.log(str.substr(-Math.floor(str.length/2),Math.floor(str.length/2)).split("").reverse().join(""))
    // if(str.substr(0,Math.floor(str.length/2)) == str.substr(-Math.floor(str.length/2),Math.floor(str.length/2)).split("").reverse().join("")){
    //     console.log("true")
    // }else{
    //     console.log("false");
    // }
    return str === str.split("").reverse().join("")
}

//console.log(checkPalindrome("madamds"));

// const palindrome = str => {
//     // turn the string to lowercase
//     str = str.toLowerCase()
//     // reverse input string and return the result of the
//     // comparisong
//     return str === str.split('').reverse().join('')
//   }

  //console.log(palindrome("madamd"));

// for (var i = 0; i < 5; i++) {
//     console.log(i +"\n")
//     setTimeout(() => console.log(i), 2000)
    
//   }

//   function f() {}
//   console.log(f())

// var isPalindrome = function(head) {
//   var str1="";
//   var str2 = "";
//   var n = Math.floor(head.length/2);
//   for(var a =0;a<n;a++){
//       str1 += head[a]
//       str2 += head.pop()
//   }
//   console.log(str1 + "=" + str2)
//   if(str1===str2){
//       return true
//   }else{
//       return false
//   }
// };

// var head = [1,2,2,3,2, 2,1]
// console.log(isPalindrome(head))

(function(){
  console.log("Hello self invoke function")
})()









