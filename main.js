//const menuBtn = document.querySelector(".menu-btn");
//let menuOpen= false;
//menuBtn.addEventListener("click", ()=>{
   // if(!menuOpen){
       // menuBtn.classList.add("open");
       // menuOpen = true;
  //  } else {
       // menuBtn.classList.remove("open");
      //  menuOpen = false;
 //   }
//});
const toggleButton = document.getElementsByClassName('toggle-button')[0]
const navbarLinks = document.getElementsByClassName('navbar-links')[0]

toggleButton.addEventListener('click', () => {
  navbarLinks.classList.toggle('active')
})