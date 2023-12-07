//loops

//loops are used to execute piece of code again and again
/*
for(let i = 1; i <= 5; i++){
    console.log(`value of i is ${i}`);
}
*/

//there are three conditions in case of for loop 
//let i; this is called intialiser
//i <=5; this is stopping condition
//i++ this is itrate condition

//infinite loop a - a loop that never ends

//we should never use a infinite loop in our pc it can hang our pc

//when stopping condition never shows faulty answer it becomes infinite loop


//for(let i =0; i > 0; i++){
//console.log(i)
//}

// for (initialization; condition; afterthought)
//   statement

//lets loop the array of cars using for loop method

/*
const cars = ["BMW","audi","suzuki","hundai", "ferrari"];
let text = "";
let count = 0;

for( count; count< cars.length; count++){
    // console.log(cars);
    text += ` names of ${cars} are ${count}`;

}
console.log(text);





let totalMarks = 1;

for(let marks = 1; marks< 5; marks++){
    totalMarks += ` total marks ${marks}`;
}

console.log(totalMarks);



*/


//for of and for in loops

// let i;

// for(i = 0; i<=9; i++){
//     console.log(i);
// };


//for of loops
//helps in strings and arrays.



//for-in-loop


//we use it for in loop for in the case of objects.

/*
let mangesh = {
    fName: "mangesh",
    marks: 80,
    address: "balikashram road sudake mala"
};

for (const key in mangesh) {
    console.log(`mangesh got marks in English is ${mangesh.marks}`);
    console.log( `residential address of mangesh is ${mangesh.address}`);

}

*/

/*
let mangesh = {
    fName: "mangesh",
    marks: 80,
    address: "balikashram road sudake mala"
};

let akshay = {
    fName: "akshay parkad",
    marks: 80,
    address: "balikashram road sudake mala"
};


let text = "";

for (const x in akshay) {
    text =`full name of mangesh is ${akshay.fName}
    the marks mangesh got in english subject is ${akshay.marks} 
    the residential address mangesh lives currently is ${akshay.address}`;
    
}

console.log(text);




*/

/*
Do not use for in over an Array if the index order is important.

The index order is implementation-dependent, and array values may not be accessed in the order you expect.

It is better to use a for loop, a for of loop, or Array.forEach() when the order is important.




*/


/*
The JavaScript for of statement loops through the values of an iterable object.

It lets you loop over iterable data structures such as Arrays, Strings, Maps, NodeLists, and more:
*/


//for of loop

/*
const cars = ["bmw","maruti","hundai","tata"];


let text1 = "";

for (const key of cars) {
    text1 += key + " ";
}

console.log(text1);


let fname = "mangesh";
let text = ""

for (const x of fname) {
    text += x;
    console.log(x);
}

console.log(text);


*/
/*
let fName = "mangesh choudhari";
let text = "";
for (const key of fName) {
    console.log(key);
    text+= key;

};
// console.log(text[]);
*/

//diffrence between do while loop and while loop

//do while loop
//condition run once but in do while loop condition will run first 
// i=20; do{ log(apana college) i++;} while (i<=10);

//do line will run first even if condition is falsy




// let i = 0;
// let text = "";

// while (i<=10) {
//     text += i;
//     i++;
// }

// console.log(text);

// let i = 0;
// while ( i, i<=5) {
//     console.log(i);
//     i++;
// }

/*
let i = 0;
let text = "";

do{
    text += i + " ";
    i++;
}while(i, i<=10);

console.log(text);

*/



/*
let gameNum = 25;
let userNum = prompt("guess the correct number")

while(userNum != gameNum){
    userNum = prompt("you entered wrong number, guess again")
}

console.log("congratulations, you entered right number");
*/

//strings and its types and methods


// let fName = "mangesh";
// console.log(fName[0]);

//position starts from 0

//we also call it index


//template literals

// let upperCase = fName.toUpperCase()
// console.log(upperCase);

// let lowerCase = fName.toLowerCase()
// console.log(lowerCase);

// Automatic replacing of variables with real values is called string interpolation


// let text = "We are the                 so-called \"Vikings\" from the north.";

// console.log(text);

// let text1= 'It\'s alright.';



// slice() extracts a part of a string and returns the extracted part in a new string.

// The method takes 2 parameters: start position, and end position (end not included).

let cars = "bmw , audi, ferrari";

let newCars = cars.slice(2, 13)
console.log(newCars);

let fName = "mangesh";
let lName = "choudhari"

// console.log(fName.slice(0, 7));
// console.log(`full name of student is ${fName} ${lName}`);
// let fullName = `full name of student is ${fName} ${lName}`;
let fullName = fName.replace("m", "b");
console.log(fullName);

// let text = "Apple, Banana, Kiwi";
// let part = text.slice(-8);

// console.log(part);




let str = "Apple, Banana, Kiwi";
let part = str.substring(7, 13);


console.log(part);

// The replace() method does not change the string it is called on.

// The replace() method returns a new string.

// The replace() method replaces only the first match

// If you want to replace all matches, use a regular expression with the /g flag set. See examples below.



let text1 = "      Hello World!      ";
// let text2 = text1.trim();
// let text2 = text1.trimEnd();
let text2 = text1.trimStart()

console.log(text2);



































