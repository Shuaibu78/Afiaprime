window.addEventListener("scroll", () => {
    if (window.scrollY > 100) {
        document.getElementById("nav").classList.add("nav-color")
    } else {
        document.getElementById("nav").style.backgroundColor = "none"
    }
})

function openNav() {
    document.getElementById("myNav").style.width = "80%";
  }
  
  function closeNav() {
    document.getElementById("myNav").style.width = "0%";
  }

  document.getElementById('copyyear').appendChild(document.createTextNode(new Date().getFullYear()))