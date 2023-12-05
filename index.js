// const product = {
//     title: "ball pen",
//     rating: 5,
//     price: 120,
//     offer: 4,


// }

// console.log(typeof product)


// const profile = {
//     userName: "@mangesh choudhari",
//     isFollow: true,
//     posts: 196,
//     bio: "this is official linkdin profile of mangesh choudhari",

// }

// console.log(typeof profile["userName"]);
/*
console.log("hello world");
fullName= "mangesh";
console.log(fullName);
fullName = 24;
console.log(fullName);
*/



// let cannot be redcleard but can be updated// 

let fullName = "mangesh choudhari";

fullName = "gaurav sudake";



//const cannot be redeclared and can not update the variable value//
// const studentName = "mangesh choudhari";
// const studentName = "akshay";
// studentName = "ram";


// console.log(fullName);


//const must be initialised
//you can initalised let
let a;
console.log(typeof a);

a = 12;

console.log( a);


// const b ;

const b = 13;

console.log(b);

//let is a block scop variable

/*{
    let a =5;
    // let a= 6;
    console.log(a);
}

{
    let a =7;
    // let a= 6;
    console.log(a);
}
*/

//Data Types

//a) Primitive Data Types

//number,strings,boolean,undefined, null, bigint, symbol//

//non_primitive

//object- its a collection of values like const student = {
    //name: "mangesh"; age: 24, marks: 44,
//

//you can change the key value of the objects


const students = {
    studentName: "mangesh choudhari",
    age: 24,
    isPass: true,
    class: 12,

};

// console.log(students.studentName);
// console.log(students["studentName"]);

students["age"] = students["age"] + 22;
//console.log(students.age);
//console.log(students["age"]);





















