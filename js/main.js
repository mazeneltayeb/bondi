let activeLink = document.querySelectorAll(".navbar .navbar-nav  .nav-item .nav-link")
activeLink.forEach((el)=>{
el.addEventListener("click",()=>{
    activeLink.forEach((el)=>{
el.classList.remove("active")
    })
    el.classList.add("active")
})
})
///////////////////////////////////////////////////////////////////
let activeLinkTwo = document.querySelectorAll(".our-work .link button")
activeLinkTwo.forEach((el)=>{
el.addEventListener("click",()=>{
activeLinkTwo.forEach((el)=>{
    el.classList.remove("active")
})
el.classList.add("active")
})
})