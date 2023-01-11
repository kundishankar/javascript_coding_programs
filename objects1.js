//possible ways to create objects in javascript

//1st method
const object1 = {
    "firstname":"Ganesh",
    "lastname":"Kumar"
}
var obj1 = JSON.stringify(object1)
console.log(JSON.parse(obj1))

//2nd method
const object2 = {}

object2.age = 25
object2.city = "Hyderabad"
object2['state'] = "Telangana"

// console.log(object2)

//3rd method
const object3 = [];// array is also an object only in javascript

object3['mobile'] = 987654323;
object3['email'] = "ganesh@gmail.com";
object3.eudcation = "B.Tech"

// console.log(object3);

//4th method
function myFunction(name) {
    this.name=name;
    this.age =21;
}

var object4 = new myFunction("sudheer");
// console.log(object4)

//5th method

class Person {
    constructor(firstname,lastname){
        this.firstname = firstname;
        this.lastname = lastname;
    }

    newFunction(){
        return this.firstname;
    }
}

var object5 = new Person("Rahul","Gupta")
//console.log(object5.firstname)
//console.log(object5.newFunction())
