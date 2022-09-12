var fruit1 = "banana";
var fruit2 = "pineapple";
var fruit3 = "apple";
var fruit4 = "peach";
var fruit5 = "orange"; // strings

var fruitArray = ["banana", "pineapple", "apple", "peach", "orange"];
// a single variable "fruitarray" that stores a list of other variables
// arrays start from 0
// deals with a collection of info, tidies up code compared to lines 1-5
// can cont a mix of variables eg line below
// console.log(fruitArray[1]);

fruitArray[1] = "tomato";

var mixedArray = [42, "pineapple", true, [3, 6, "nine"], "orange"];
// here shows an array within an array: a list of things separated by a comma

// console.log(fruitArray[1]);

for(var fruit of fruitArray){
// run this block of code for each entry in the array
// runs (loops) 5 different times for each 'fruit' entry
// iterates elements and does stuff based on these
// console.log(fruit)

if(fruit==="tomato"){
    console.log("What's a tomato doing here?")
}else{
    console.log(fruit)
}

}

// for (x of y)
