//Given two strings, return true if they are anagrams of one another- Mary - army

const checkAnagram = (str1, str2) => {
    // var str12 = str1.toLowerCase().split("").sort().join("");
    // var str22 = str2.toLowerCase().split("").sort().join("");
    // console.log(str12 +":"+ str22)
        if(str1.toLowerCase().split("").sort().join("") == str2.toLowerCase().split("").sort().join("")){
            console.log(str1 +" and "+ str2 + " are anagram of each other");
        }else{
            console.log(str1 +" and "+ str2 + " are Not an anagram of each other")
        }
    
}

//checkAnagram("dash", "sahd")

//Rotate the array by one
const arr = [20, 15, 26, 10, 5]

const shiftArrayByOne = (array) => {
    var a = array.pop();
    array.unshift(a)
    //console.log(array)
}

//shiftArrayByOne(arr)









