// Seting Gear

let setingContainer = document.querySelector(".seting")


let setingGear = document.querySelector(".seting .seting-gear i")


setingGear.onclick = () => {

    setingContainer.classList.toggle("open")

    setingGear.classList.toggle("fa-spin")

}


// Seting Color-Section

let colorOption = document.querySelectorAll(".seting .seting-container .color-option ul li")

let colorLocalStorage = localStorage.getItem("color-option");


if (colorLocalStorage !== null) {

    document.documentElement.style.setProperty("--main-color", colorLocalStorage)

    colorOption.forEach((ele) => {

        ele.classList.remove("active")

        if (ele.dataset.color === colorLocalStorage)

        ele.classList.add("active")

    })
}



colorOption.forEach((ele) => {

    ele.addEventListener("click", (e) => {

        document.documentElement.style.setProperty("--main-color", e.target.dataset.color)

        e.target.parentElement.querySelectorAll(".active").forEach(ele => {

            ele.classList.remove("active")

            localStorage.setItem("color-option", e.target.dataset.color)

        })

        e.target.classList.add("active")

    })
}) 





// background-option in local storage

let backgroundOption = document.querySelectorAll(".seting .seting-container .background-option span")

const backgroundLocal = localStorage.getItem("background-option")

let employment;

let backgroundSelect = true;

if (backgroundLocal !== null) {

    if (backgroundLocal === "yes") {

        backgroundSelect = true;

    }else {

        backgroundSelect = false;

    }

    backgroundOption.forEach((ele) => {

        if (ele.dataset.background === backgroundLocal) {

            ele.classList.add("active")

        }else {

            ele.classList.remove("active")

        }

    })

}


// change img on background

let backgroundImages = document.getElementById("header")

let imges = ["01.jpg", "02.jpg", "03.jpg", "04.jpg", "05.jpg"]


function setBck () {

    if (backgroundSelect === true) {

        employment = setInterval( () => {

            let random = Math.floor(Math.random() * imges.length)

            backgroundImages.style.backgroundImage = `url('url("imgs/' + imgsArray[randomNumber] + '")')`

        }, 6000)
    }


}

setBck ()


// background-option

backgroundOption.forEach((ele) => {

    ele.addEventListener("click", (e) => {


        localStorage.setItem("background-option", e.target.dataset.background)

        if (e.target.dataset.background === "yes") {

            backgroundSelect = true;

            setBck ()


        }else {

            backgroundSelect = false;

            clearInterval(employment)


        }

        e.target.parentElement.querySelectorAll(".active").forEach((ele) => {

            ele.classList.remove("active")

        })


        e.target.classList.add("active")

    })
})


// skills

let skillSection = document.querySelector(".our-skills")
let skillsSpan = document.querySelectorAll(".our-skills .container .skill-box .range span")


window.onscroll = () => {

    let skillsOffsetTop = skillSection.offsetTop

    let skillHeight = skillSection.offsetHeight

    let windowHeight = window.innerHeight

    let windowScrollTop = window.pageYOffset


    if (windowScrollTop > (skillHeight + skillsOffsetTop - windowHeight)) {

        skillsSpan.forEach((ele) => {
    
            ele.style.width = ele.dataset.range
    
        })
    
    }
}


// focus for imge 

let galary = document.querySelectorAll(".galary .container .images img")


galary.forEach((ele) => {

    ele.addEventListener("click", (e) => {

        // overlay
        let ovarLay = document.createElement("div")

        ovarLay.className = "ovarlay"

        document.body.appendChild(ovarLay)

        // text and img
        let contentOvarlay = document.createElement("div")

        contentOvarlay.className = "content-ovarlay"

        let clear = document.createElement("span")

        clear.textContent = "x"

        clear.onclick = () => {

            ovarLay.remove()

            clear.parentElement.remove()

        }

        contentOvarlay.appendChild(clear)

        let heading = document.createElement("h3")

        heading.textContent = e.target.alt

        contentOvarlay.appendChild(heading)

        let image = document.createElement("img")

        image.src = e.target.src

        contentOvarlay.appendChild(image)

        document.body.appendChild(contentOvarlay)

    })

})


// bullets seting

let bulletsSpan = document.querySelectorAll(".seting .seting-container .bullets-option span")
let bulletsContainer = document.querySelector(".bullets-container")


const bulletsLocalStorage = localStorage.getItem("bullets-option")

if (bulletsLocalStorage !== null) {

    if (bulletsLocalStorage === "yes") {

        bulletsContainer.classList.add("show")

        bulletsContainer.classList.remove("heddin")


    }else {

        bulletsContainer.classList.add("heddin")

        bulletsContainer.classList.remove("show")

    }

    bulletsSpan.forEach((ele) => {

        ele.classList.remove("active")

        if (ele.dataset.show === bulletsLocalStorage) {

            ele.classList.add("active")

        }

    })


}


bulletsSpan.forEach((ele) => {

    ele.addEventListener("click", (e) => {

        localStorage.setItem("bullets-option", e.target.dataset.show)

        if (e.target.dataset.show === "yes") {

            bulletsContainer.classList.add("show")

            bulletsContainer.classList.remove("heddin")

        }else {

            bulletsContainer.classList.add("heddin")

            bulletsContainer.classList.remove("show")

        }

        e.target.parentElement.querySelectorAll(".active").forEach((ele) => {

            ele.classList.remove("active")

        })

        e.target.classList.add("active")

    })

})


// bullets Link

let bulletsLink = document.querySelectorAll(".bullets-container .bullet")



bulletsLink.forEach((bull) => {

    bull.addEventListener("click", (e) => {

        document.querySelector(e.target.dataset.section).scrollIntoView({

            behavior: "smooth"

        })

    })

})


// reset option

document.querySelector(".reset-options").onclick = () => {

    localStorage.clear()

    window.location.reload()

}

// bars
let bar = document.querySelector(".bar i")
let ulLinks = document.querySelector(".links")

bar.onclick = () => {

    ulLinks.classList.toggle("open")

}

document.addEventListener("click", (e) => {

    if (e.target !== ulLinks && e.target !== bar) {

        if (ulLinks.classList.contains("open")) {

            ulLinks.classList.remove("open")

        }

    }

})
