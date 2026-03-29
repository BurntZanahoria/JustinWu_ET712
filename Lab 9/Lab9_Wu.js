console.log("Justin Wu")
/**
 * Window's events
 */
// collect buttons
const btnright = document.querySelector(".btnright")
const btnleft = document.querySelector(".btnleft")

// define a function to scroll image
function scrollimage(scrollpexels){
    let gallerycontainer = document.querySelector('section.gallerycontainer')
    gallerycontainer.scrollBy({
        left: scrollpexels,
        behavior: "smooth"
    })
}

// Add a click event for each button
btnright.addEventListener("click", function(){
    scrollimage(500)
})
btnleft.addEventListener("click", function(){
    scrollimage(-500)
})

// resize
// collect elements
const heightpx = document.querySelector(".heightpx")
const widthpx = document.querySelector(".widthpx")

// add a resize event to the browser
window.addEventListener("resize", function(){
    let heightwindow = window.innerHeight
    let widthwindow = window.innerWidth

    heightpx.textContent = `Height pixels = ${heightwindow}`
    widthpx.textContent = `Width pixels = ${widthwindow}`
})

// EXERCISE

const header = document.querySelector("header")

// SCROLL EVENT
window.addEventListener("scroll", function(){
    if(window.scrollY > 0){
        header.style.backgroundColor = "#bfe6ff" // slightly darker blue
    } else {
        header.style.backgroundColor = "#d9f0ff" // original light blue
    }
})

// RESIZE EVENT
window.addEventListener("resize", function(){
    let width = window.innerWidth

    // update tab title
    document.title = `Width: ${width}px`

    // change header text color
    if(width > 1000){
        header.style.color = "blue"
    }
    else if(width > 700){
        header.style.color = "green"
    }
    else if(width > 300){
        header.style.color = "orange"
    }
    else{
        header.style.color = "purple"
    }
})

// run once on load so it applies immediately
window.dispatchEvent(new Event("resize"))