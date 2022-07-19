// HAMBURGER MENU
let menuButton = document.querySelector(".menu-button");
let navbar = document.querySelector(".navbar")

menuButton.addEventListener("click", function() {
    navbar.classList.toggle("opened")
})

// PARALLAX

let allParallax = document.querySelectorAll(".parallax");
// console.log(allParallax)

function isScrolledIntoView(el) {
    var rect = el.getBoundingClientRect();
    var elemTop = rect.top;
    var elemBottom = rect.bottom;

    var isVisible = elemTop < window.innerHeight && elemBottom >= 0;
    return isVisible;
}

window.addEventListener("scroll", function() {
    for (let index = 0; index < allParallax.length; index++) {
        let elem = allParallax[index];
        
        if (isScrolledIntoView(elem)) {
            // console.log("div is in view")
            // console.log(elem)

            let stickers = elem.querySelectorAll(".grid-sticker, .income-coin");
            // console.log(stickers)

            for (let index = 0; index < stickers.length; index++) {
                let position = (window.scrollY - elem.offsetTop) * -0.2;
                // console.log("scrollY: ", window.scrollY)
                // console.log("element offset top: ", elem.offsetTop)

                stickers[index].style.transform = "translate3d(0px, " + position + "px, 0px)";
            }
        }
    }
})