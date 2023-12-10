//Arrays and its Methods

let info = ["mangesh", "rahul", 88, false];//this is not followed in codding try to use same information.

//arrays are objects
//we call it non premitive Data types

//array indices
// let number = [80, 70,60,50,40,30,20,10];

//indexing starts from the 0 first element will be on the 0th position 
// 80 is 0th position 70 is 1st 60is 2nd 50 is 3rd etc
/*
console.log(number[0]);
console.log(number[1]);
console.log(number[2]);
*/
/*
console.log(number[2]= 66);
number[2]= 66; // in this case array is mutable we can change its value on the go without storing value in the new value.
console.log(number);
*/

//arrays

//array is mutable object we can change its value
/*
let marks = [1,2,3,4,5,6]
marks[3]=5;
console.log(marks);
*/

//in other case string is a immutable we cant change its value on the go.

//  sNames = "mangesh", "akshay","rahul";

//  //  sNames[1]="ganesh";
//   let newName = sNames[2]="ganesh";
//  console.log(newName);
//  console.log(sNames);


//Looping Over An Array 
//Real roll of Loops come with an array when its about iteration.

//for(let index = 0; index<array.length; index++){
    //do some work here
//}

//calculate the average of sum of students using for loop.

// let sMarks = [80,40,66,88,55];
// let sum = 0;
// let i = 0;
// for (let val of sMarks) {
    
//     sum += val;
//      avg = sum/5;
//      i++;

//     }
    
    // console.log(sum);
    // console.log(avg);
    // console.log(i);
/*
    let sum1 = 0;
    let val = sMarks[0];
    for(let index = 0; index<sMarks.length; index++){
        sum1 += sMarks[index];
        avgs = Math.ceil (sum1/5);
        
    }

    console.log(avgs);
    console.log(sum1);

    */


//all 5 items have 10% off on them.
/*
let items = [250,645,300,900,50];
let i = 0;
let sum = 0;
for (let value of items) {
    
    
    let offer = items[i]/10;
    console.log(`the value before offer ${items[i]}`);
    console.log(`the amount of 10 % off offer ${offer}`);

    items[i]-= offer;
    console.log(`the value after offer ${items[i]}`);
    sum += items[i];
    console.log(`the value after reducing offer price ${items[i]}`);

    // console.log(`the value before offer ${items[i]}`);
     items[i] = sum-offer;
    // console.log(`the value after offer ${items[i]}`);
    
    i++;
}

console.log(sum);

*/




// Spaces and line breaks are not important. A declaration can span multiple lines:



// console.log(cars.toString());
// console.log(typeof cars);

//accessing the first element of array
// console.log(cars[0]);
// console.log(cars[cars.length -1]);


//adding new elements in array

// console.log(cars.push("bugati"));
// console.log(cars);


/*
const carss = ["Volvo", "Jeep", "Mercedes"];
alert(cars.length);

console.log(alert(`length of cars ${cars.length}`));
*/



let cars = [];

cars[0]= "audi";
cars[1]= "bmw";
cars[2]= "ferrari";
cars[3]= "suzuki";
cars[4]= "hundai";

console.log(cars);
console.log(cars.toString());
console.log(cars.join());

//popping and pushing

console.log(cars.push("mangesh"));
console.log(cars);
console.log(cars.pop(0));
console.log(cars.toString());


// Shifting is equivalent to popping, but working on the first element instead of the last.

console.log(cars.shift());
console.log(cars.unshift("mangesh"));
console.log(cars);


const myGirls = ["Cecilie", "Lone"];
const myBoys = ["Emil", "Tobias", "Linus"];

const MyChildren = myBoys.concat(myBoys);
// console.log(MyChildren.toString());


//merging three arrays

const arr1 = ["Cecilie", "Lone"];
const arr2 = ["Emil", "Tobias", "Linus"];
const arr3 = ["Robin", "Morgan"];
const myChildren = arr1.concat(arr2, arr3);
// console.log(myChildren.toString());

//merging array with value;

const arr4 = ["Emil", "Tobias", "Linus"];
const myChildrens = arr1.concat("Peter"); 
// console.log(myChildrens);
//splice and sclice of arrays

const arr5 = ["Emil", "Tobias", "Linus"];
// console.log();

//splice method

const fruits = ["Banana", "Orange", "Apple", "Mango"];
fruits.splice(2, 0, "Lemon", "Kiwi");
console.log(fruits);

// The first parameter (2) defines the position where new elements should be added (spliced in).

// The second parameter (0) defines how many elements should be removed.

// The rest of the parameters ("Lemon" , "Kiwi") define the new elements to be added.



const fruits1 = ["Banana", "Orange", "Lemon", "Apple", "Mango"];
const citrus = fruits.slice(1);
console.log(citrus);





