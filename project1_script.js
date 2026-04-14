console.log("Justin Wu Project 1")

const header = document.querySelector("header")

// scroll effect (from Lab 9)
window.addEventListener("scroll", function(){
    if(window.scrollY > 0){
        header.style.backgroundColor = "#a8d5a2" // light green shade
    } else {
        header.style.backgroundColor = "lightgreen"
    }
})