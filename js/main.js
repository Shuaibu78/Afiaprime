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

// // modal
// let modal = document.getElementById("myModal");
// let btn = document.getElementById("myModalBtn");
// var close = document.getElementsByClassName("close")[0];

// // opening
// btn.onClick = function() {
//   modal.style.display = "flex";
// }

// // closing
// close.onclick = function() {
//   modal.style.display = "none";
// }

// // When the user clicks anywhere outside of the modal, close it
// window.onclick = function(event) {
//   if (event.target == modal) {
//     modal.style.display = "none";
//   }
// }

// tabchanges
const openTab = (evt, evtName) => {
    let i, tabcontent, tablink;
  
    tabcontent = document.getElementsByClassName("approvedAgents");
    for (i = 0; i < tabcontent.length; i++) {
      tabcontent[i].style.display = "none";
    }
  
    tablink = document.getElementsByClassName("tablink");
    for (i = 0; i < tablink.length; i++) {
      tablink[i].className = tablink[i].className.replace("activeTab", "");
    }
  
    document.getElementById(evtName).style.display = "flex";
    evt.currentTarget.className += "activeTab";
}

const ClickedTab = (evt, evtName) => {
    let i, tabcontent, tablink;
  
    tabcontent = document.getElementsByClassName("faq-content");
    for (i = 0; i < tabcontent.length; i++) {
      tabcontent[i].style.display = "none";
    }
  
    tablink = document.getElementsByClassName("faqLinks");
    for (i = 0; i < tablink.length; i++) {
      tablink[i].className = tablink[i].className.replace("faqActive", "");
    }
  
    document.getElementById(evtName).style.display = "grid";
    evt.currentTarget.className += "faqActive";
};

document.getElementById("defaultOpen").click();

const readMore = () => {
    let more = document.getElementById ("more");
    let hide = document.getElementById("opaque");
    let more1 = document.getElementById("more1");
    let hide1 = document.getElementById("opaque1");
  
    if (hide.style.display === "none") {
      hide.style.display = "block";
      hide1.style.display = "block";
      more.style.display = "none";
      more1.style.display = "none";
    } else {
      hide.style.display = "none";
      hide1.style.display = "none";
      more.style.display = "grid";
      more1.style.display = "grid";
    }
  };


function openForm () {
  document.getElementById("myForm").style.display = "block";
  document.getElementById("closeImg").style.display = "none";
}
  
function closeForm (){
  document.getElementById("myForm").style.display = "none";
  document.getElementById("closeImg").style.display = "block";

}