console.log("hello how are you");
/*
function myName(fName) {
    console.log("my full name is " + fName + " and i live in ahmednager");
}

*/

/*
let fName = "mangesh"
console.log(fName.toUpperCase());//this is called functions methods
console.log(fName.toLowerCase());//this is called functions methods
console.log(fName.concat(" choudhari"));//this is called functions methods
console.log(fName.slice(0,2));//this is called functions methods
*/

//a block of code that performs a specific task and can be invoked at any time.

//function definition
function name(params) {
  //do some code
}

//function call or invoked
// function name()

//lets create function of sum

/*
 function sum(a,b) {
    s = a+b;
    console.log('hello');
    return s;//this is the last line of function, you cant write a code after return
    console.log(s);

}


let val = sum(2,3)
console.log(val);


*/

//arrow function is a compact way of writing functions

// let total = sum (x,y) => {
//     s = x + y
//     return s

// }

// sum(2,3)

//normal function call

// function sum(a,b) {
//     console.log(a+b);
// }

// sum(2,3)

/*
function  sum(a,b) {
    s = a + b;
    return s;
}

let total = sum(2,3)
console.log(total);

*/

//arrow function call

// const sum = (a,b) => {
//     return a+b;
// }

// sum(3,4)

/*
let mul = ( x, y) => { //we prefer arrow function in case of one task like multiplication aur substraction etc, but in writing big code we prefer normal function.
    s = x*y;
    console.log(s);
    return s;
}

mul(2,3)



mul = 33;
console.log(mul);

*/

//conunt vowels function auioe

/*
function countWovels(str) {
    let count = [""];
    for (const i of str) {
        if( i ==="a" || i ==="u" || i ==="o" || i ==="e") {
            count++;
        }
    }
     return count;
}

*/



// console.log(countWovels("mangesh choudhari i live in ahmednagar"));

//lets create an arrow function 


const countWovel = (str) => {
    count = 0;
    for (const i of str) {
        if( i ==="a" || i ==="u" || i ==="o" || i ==="e") {
            count++;
        }
    }
    return count;
}


// console.log(countWovel("aueo"));

// Array["mangesh", "akshay"]

// Array.forEach(countWovel("mangesh"));


//forEach loop (method)

//bulky, less readiblity, cant reuse code but if we use function we can avoid these problems

// const run = (text) => {
//     console.log(text);
// }

// run("running")

//its called function declaration

run()

function run(text) {
    console.log("running");
}
//function assignment
let walk = function walk(text) {
    console.log("walking");
}


walk()

//annonymouse Fuction assignment

let walk1 = function(text) {
    console.log("walking twice");
}
walk1()


//function assingment
//1)named function assingment
//2) anonymuouse fuction assingment

//hoistiong its the process of moving fucntion declaration to the top of the file done automatically by browser engine.



//...rest operator
//it add value in an array

function sum(num,value, ...para) {//rest parameter must be last formal parameter
    console.log(para);
    console.log(num);
    console.log(value);

}

sum(1,2,3,4,5,7,8,9)

//default parameters

//lets calculate the intrest on principle amt of rs 1000 for five years
function intrest(p,r=6,y=5) {
    console.log(`principle amt ${p} and intrest of ${r} % will be`);
    return p*r*y/100;
    
}
// console.log(`principle amt ${p} and intrest of ${r} % will be`);

console.log(intrest(1000));
console.log(intrest(2000));
console.log(intrest(1500));

//scope

{
  var a = 5;
}
console.log(a);

//let vs var

//var is a global scope variable and let and const is block scoped variables

const ab = 5;

function a () {

    const ab= 5;
}

function b () {
    const ab = 5;
} 
//in this case const is a block scoped variable thats why it dosent throw error













































































