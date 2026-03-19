console.log("Full name: Justin Wu")
// Select the first paragraph from the document
let allparagraphs = document.querySelectorAll('p')
console.log(allparagraphs)
// Set the font color to green for all all selected paragraphs 
for(let i = 0; i<2; i++){
    allparagraphs[i].style.color = "green" 
}
console.log(allparagraphs[2])
allparagraphs[2].style.color = "orange"

// Set the font-size (camel case = fontSize) of the second paragraph to 50px
allparagraphs[1].style.fontSize = "30px"

// Change the text content of an element 
// Select the element first
let college_paragraph = document.querySelector('.college')
college_paragraph.innerHTML = "Hunter - <em> CUNY </em>"

// add the class .colorblue to an element with id=ciy
// select the element with id=city
let city = document.querySelector("#city")
city.className = "colorblue"

// Onmouse event
// Select the elements
let linkqcc = document.querySelector('.linkqcc')
let linkmsg = document.querySelector('.linkmsg')

// Apply the event to the element
linkqcc.onmouseover = function(){
    linkmsg.innerHTML = "QCC link was hovered"
    linkmsg.className = "hovercolor"
}
linkqcc.onmouseout = function(){
    linkmsg.innerHTML = "Mouse was removed"
    linkmsg.className = "mouseoutcolor"
}

// Event listener
// Select the elements
let square = document.querySelector('.square')
let colorsquarebtn = document.querySelector('.colorsquarebtn')

colorsquarebtn.addEventListener("click", function(){
    square.style.backgroundColor = "rgb(112,33,45)"
})

const colorrandom = function(){
    return Math.floor(Math.random() * 255)
}

// Lab Exercise
let circle = document.querySelector("#circle")
let resetBtn = document.querySelector("#resetBtn")

let count = 0

circle.addEventListener("click", function(){
    count++
    circle.textContent = count
})

resetBtn.addEventListener("click", function(){
    count = 0
    circle.textContent = count
})