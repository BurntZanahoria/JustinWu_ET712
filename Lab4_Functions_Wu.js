/**
 *  Justin Wu
 *  Feb 10, 2026
 *  Lab 4, Functions
 */
console.log("Justin Wu")

// functions to check if two numbers are 'snake eyes'
function snake_eyes(n1, n2){
    if(n1===1 && n2===1)
        console.log("SNAKE EYES")
    else
        console.log("NOT a snake eyes")
}

// call function snake_eyes
console.log("\n ---- Example 1: snake eyes")
snake_eyes(3,5)
snake_eyes(1,3)
snake_eyes(2,2)
snake_eyes(1,1)

// Example 2: Check if the temperature is greater than or equal to 75
console.log("\n---- Example 2: Temperature Check")
function checktemperature(temperature){
    if(temperature>=75)
        return true
    else
        return false
}

// call function
t = 60
t1 = checktemperature(t)
console.log(`is temperature greater than 75? ${t1}`)

t2 = checktemperature(90)
console.log(`is temperature greater than 75? ${t2}`)

// Example 3
console.log("\n---- Example 3: JS Math Object")
n1 = 2
n2 = 3.655
n3 = 5
n4 = 2

console.log(`${n1} after round = ${Math.round(n1)}`)
console.log(`${n2} after round = ${Math.round(n2)}`)
console.log(`${n1} after cell = ${Math.ceil(n1)}`)
console.log(`${n2} after ceil = ${Math.ceil(n2)}`)

// Math.pow(base,exponent)
console.log(`${n3} to the power of ${n4} is = ${Math.pow(n3,n4)}`)

// Math.random() returns a number between 0 and 1
console.log(`random number = ${Math.random()}`)

// Math.random() between -1 and 9
r = Math.ceil(Math.random()*10) - 1
console.log(`random number between -1 and 9 = ${r}`)

// Example 4
console.log("\n---- Example 4: Pick a random color for a list of colors")
let colors = ['red', 'orange', 'pink', 'blue', 'green']

function pickcolorindex(lengthlist){
    let indexcolor = Math.floor(Math.random()*lengthlist)
    return indexcolor
}

// testing
let colorindex = pickcolorindex(colors.length)
console.log(`The picked color is = ${colors[colorindex]}`)

console.log("\nEXERCISE")
/**
Exercise: define a function called checkName() that validates a name and console a greeting. Function checkName() handles situation that happens if the user:
clicks Cancel on the dialog box
does not enter text in the dialog box and press the 'Ok" button
enters a number */
function checkName(){
    let username
    let message = "Enter an username" // This is to prevent the function from going from Cancel/Ko Outcome to Enter a name. Make it stick with you forgot...   
    
    // Loop to validate that the username 
    while(true){
        username = prompt(message);
    // Cancel and Ok Outcome
    if (username === null || username === ""){
        message = "You forgot to enter a name. Enter a name again:";

    }
    // Number Outcome
    else if (username >= 0){
        message = "___ is invalid! Enter a name again:";
    }
    else {
        console.log(`Welcome ${username.toUpperCase()} to the class! `)
        break;   // exit the loop
    }
    }
    return username;
}
checkName()