// fixed navbar
window.addEventListener("scroll", () => {
    if (window.scrollY > 100) {
        document.getElementById("nav").classList.add("nav-color")
    } else {
        document.getElementById("nav").style.backgroundColor = "none"
    }
})

// Navigation bar
const menuBtn = document.querySelector(".menu-icon span");
const searchBtn = document.querySelector(".search-icon");
const cancelBtn = document.querySelector(".cancel-icon");
const xBtn = document.querySelector(".xnav");
const items = document.querySelector(".nav-items");
const form = document.querySelector("form");

menuBtn.onclick = ()=>{
    items.classList.add("active");
    menuBtn.classList.add("hide");
    searchBtn.classList.add("hide");
    cancelBtn.classList.add("show");
}

cancelBtn.onclick = ()=>{
    items.classList.remove("active");
    menuBtn.classList.remove("hide");
    searchBtn.classList.remove("hide");
    cancelBtn.classList.remove("show");
    form.classList.remove("active");
    cancelBtn.style.color = "#ff3d00";
}

searchBtn.onclick = ()=>{
    form.classList.add("active");
    searchBtn.classList.add("hide");
    cancelBtn.classList.add("show");
}

// Copyright
let copyRightYear = document.getElementById('copyyear')
copyRightYear.appendChild(document.createTextNode(new Date().getFullYear()))