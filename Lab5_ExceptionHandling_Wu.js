/**
 *  Justin Wu
 *  Feb 24, 2026
 *  Lab 5, js Objects and Try-Catch
 */
console.log("Justin Wu")
console.log("\n---- Example 1: Spread....")
// use spread to iterate through each value
let numbers = [10, 20, -15, 6, 31]
let max_numbers = Math.max(...numbers)
console.log(max_numbers)

console.log("\n---- Example 2: Spread Different Arrays")
let colors = ['yellow', 'red', 'pink']
let animals = ['dog', 'cat']
// combine two arrays using spread
// let combineArray = colors + animals
let combineArray = [...colors,...animals]
console.log(combineArray)

console.log("\n---- Example 3: Exception Handling")
function checknumber(number){
    dbnumber = number*2
    console.log(dbnumber)
}

function divide(a, b){
    try{
        if(b===0){
            throw new Error("Must enter a number that is not zero")
        }
        if(isNaN(a) || isNaN(b)){
            throw new Error("Must be a number")
        }
    return a/b
    }catch(error){
        console.error(`An error occurred: ${error.message}`)
        return 0;
    }finally{
        console.log("Execution completed!")
    }
}

console.log(divide(10, 2))

console.log("\n---- Example 4: Exception Handling in an array")
function getArrayElement(arr, index){
    if(index < 0 || index >= arr.length){
        throw new RangeError("Index out of bounds");
    }
    return arr[index];
}

// call the function
cities = ['NYC', 'Boston', 'Miami', 'Seattle', 'Chicago']
try{
    console.log(getArrayElement(cities,3))
    console.log(getArrayElement(cities,8))
} catch(error){
    if (error instanceof RangeError){
        console.error("Range Error ", error.message)
    }
    else{
        console.error("An unexpected error occurred: ", error)
    }
} finally{
    console.log("Array access operation completed")
}

console.log("\n---- Example 5: Objects and Methods in JS")
// object = car
const car = {
    //properties
    type : "Fiat",
    model : "500",
    color : "white"
}

// to access to the value
console.log(car.color)


console.log("\n---- Example 6: Properties and Methods of an object")
// create an object
const person = {
    // properties
    firstname : "Peter",
    lastname : "Pan",
    id : 1234,

    // method
    fullname : function(){
        return this.firstname + " " + this.lastname
    }
}

// access to a property of an object
console.log(person.id)

// access to a method of an object
console.log(person.fullname())

console.log("\n---- Example 7: this accessor in an object")
const hen = {
    name : "Helen",
    id : 12,
    eggcount : 0,
    lay_an_egg (){
        this.eggcount +=1
        return "LAY AN EGG"
    }
}

console.log("\n---- Example 8: object constructor template")
// create an object with initial values
function course(title, instructor, code, session, students){
    this.t = title,
    this.i = instructor,
    this.c = code,
    this.s = session,
    this.number_students = students
}

// create an object for this function
let course1 = new course("C++", "Prof. An", "ET575", "12345", 20)
let course2 = new course("Javascript", "Prof. Wu", "ET712", "23653", 6)

// accessing data of the object function
console.log(course1.i)
console.log(course2.number_students)

console.log("\n---- EXERCISE 1 description (JS object)")

/*
create an object named mycalculator with two properties and two methods.

The properties name are message and side. The 'message' property is a string, and the 'side' property is an integer with the value of 2.
The methods name is area_square and volume_cube. Each method uses the side property to calculate the area of a square and the volume of a cube. The formulas are:
area of a square = side^2, use the Math.pow(side,2) 
volume of a cube = side^3, use the Math.pow(side,3) 
Each method returns the calculated value.
 */

const mycalculator = {
    message: "Calculator for square and cube",
    side: 2,

    area_square: function(){
        return Math.pow(this.side, 2);
    },

    volume_cube: function(){
        return Math.pow(this.side, 3);
    }
};

console.log(mycalculator.message);
console.log("Area of square:", mycalculator.area_square());
console.log("Volume of cube:", mycalculator.volume_cube());

console.log("\n---- EXERCISE 2 description (JS exception handling)")

/*
Define a JavaScript function named readProperty that takes two parameters: 
an object obj and a property name prop. 
The function should attempt to access the property prop from the object obj. 
If an error occurs (such as trying to access a property on null or undefined), 
catch the error and return a message that says "Error accessing property".

The program must use try-catch inside the function.
*/

function readProperty(obj, prop){
    try{
        return obj[prop];
    }
    catch(error){
        return "Error accessing property";
    }
}

// Test cases
let student = { name: "Justin", major: "IT" };

console.log(readProperty(student, "name"));      // Justin
console.log(readProperty(student, "major"));    // IT
console.log(readProperty(null, "name"));        // Error accessing property
console.log(readProperty(undefined, "age"));    // Error accessing property
    