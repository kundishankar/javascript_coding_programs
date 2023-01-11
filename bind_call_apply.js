//CALL METHOD
var person3 = {
    course: "B.Tech",
    branch: "ET&T"
}

const person1 = {
    //age:23, //property age is not work as it throws error like "age not defined" when we use call() method
    firstName: "Rajbeer",
    lastName : "Singh",
    // return this;
    fullName: function(city, country){
       return this.firstName + " " + this.lastName +" is from "+ city +", "+country;;
       //return this;
    }
  }
  
const person2 = {
    firstName:"Rahul",
    lastName: "Gupta",
  }
  
//let merge = {...person2, ...person3}
//console.log(merge)
  // using call method
  //console.log(person1.call(person2));// TypeError: person1.call is not a function
//console.log(person1.fullName.call({...person2, ...person3}));
//const perFullname = person1.fullName.call(person2, ['Durg','India'],['India']);//It works but need to send arrays by comma separeted
const perFullname = person1.fullName.call(person2, 'Durg','India');//correct way to pass in call()
//console.log(perFullname);// It works with no errors
//setTimeout(()=> console.log(perFullname), 3000);// It will also works fine only when we call this method as a callback


//BIND METHOD
const person = {
    firstName:"John",
    lastName: "Doe",
    fullName: function () {
      return this.firstName + " " + this.lastName;
    }
  }
  
  const member = {
    firstName:"Hege",
    lastName: "Nilsen",
  }
  
  const fullName2 = person.fullName.bind(member);
  //console.log(fullName2); // returning [Function: bound fullName] , expected result not getting

//   var a = 10;
//   const myNewFunction = function(){
//     console.log(this.a)
//   }
// console.log(this.a)
//   myNewFunction();


//APPLY METHOD
//apply() method is similar to call() method only . The only difference is in apply() method we have to pass
// an array as an argument whereas in call() method we used to pass arguments as a comma separated

var person2Apply = {
    course: "B.Tech",
    branch: "ET&T"
}

const personApply = {
    //age:23, //property age is not work as it throws error like "age not defined" when we use call() method
    firstName: "Rajbeer",
    lastName : "Singh",
    // return this;
    fullName: function(city, country){
       return this.firstName + " " + this.lastName +" is from "+ city +", "+country;
       //return this;
    }
  }
  
const person1Apply = {
    firstName:"Rahul",
    lastName: "Gupta",
  }

//const applyResult = personApply.fullName.apply(person1Apply,"bhilai", 'India')//It will throw error stating - TypeError: CreateListFromArrayLike called on non-object
const applyResult = personApply.fullName.apply(person1Apply,["bhilai", 'India'])//correct way- pass arguments in array
//console.log(applyResult);

var pokemon = {
    firstname: 'Pika',
    lastname: 'Chu ',
    getPokeName: function() {
        var fullname = this.firstname + ' ' + this.lastname;
        return fullname;
    }
};

var pokemonName = function() {
    console.log(this.getPokeName() + 'I choose you!');
};

var logPokemon = pokemonName.bind(pokemon); // creates new object and binds pokemon. 'this' of pokemon === pokemon now

//logPokemon(); // 'Pika Chu I choose you!'

const obj1 = { firstName: "Sandeep", lastName:"Yadav"}
const obj2 = { age: 24, city:"Bhilai"}

const student = function(greeting1, greeting2,greeting3, greeting4){
  return greeting1 +", "+ this.firstName + " " + this.lastName +" "+ greeting2 +"\n"+ greeting3 +" "+ this.age + ", "+ greeting4 +" "+ this.city;
}

// var stu1 = student.call(obj1, "Hello", "How are you!!")
// console.log(stu1)

// var stu1 = student.apply(obj1, ["Hello", "How are you!!"])
// console.log(stu1)
obj3 = {...obj1, ...obj2}
var stu1 = student.bind(obj3)
//console.log(stu1("Hello", "How are you!!","Your age is", "and your from "))

//NEW METHODS
function getEmail(city, country){
  return `${this.firstName} ${this.lastName} is from ${city}, ${country}`
}

var students = {
  firstName:"Rahul",
  lastName:"Yadav",
  age:30
}

// console.log(getEmail.call(students, "Bhilai", "India"));
// console.log(getEmail.apply(students, ["Bhilai", "India"]));
const stuNew = getEmail.bind(students, "Bhilai", "India");
console.log(stuNew())








