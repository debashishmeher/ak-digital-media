const toggle = document.querySelector(".toggle");
const sidenav = document.querySelector(".nav-main");

function toggleFun() {
  toggle.classList.toggle("active");
  sidenav.classList.toggle("navslide");
}


let scrollPotint;

window.addEventListener("scroll", () => {
  scrollPotint=scrollY
  const scrollPosition = window.scrollY;
  const windowHeight = window.innerHeight;
  const documentHeight = document.documentElement.scrollHeight;
  const scrollPercentage = (scrollPosition / (documentHeight - windowHeight)) * 100;
  console.log(`Scroll Percentage: ${Math.round(scrollPercentage)}%`);
  

//   const contact=document.querySelectorAll(".service-box")
// console.log(scrollPotint,contact[5].offsetTop,contact[5].offsetHeight);

// if(scrollPotint>=contact[5].offsetTop-200 && scrollPotint<=contact[5].offsetTop+contact[2].offsetHeight-100){
//   contact[5].style.background="red"
// }
// else{
//   contact[5].style.background="blue"
// }

  // if (scrollPercentage >= 0) {
  //   const demo=document.querySelector(".hero-left")
  //   console.log(demo);
  //   demo.classList.remove("anim");
  // }
  // console.log(scrollPotint);
  if (scrollPotint > 0) {
    document.querySelector(".header").classList.add("sticky");
  } else {
    document.querySelector(".header").classList.remove("sticky");
  }
});

const scrollPosition = window.scrollY;
const windowHeight = window.innerHeight;
const documentHeight = document.documentElement.scrollHeight;
const scrollPercentage = (scrollPosition / (documentHeight - windowHeight)) * 100;
console.log(`Scroll Percentage: ${Math.round(scrollPercentage)}%`);

if (scrollPercentage >= 0) {
  const demo=document.querySelector(".hero-left")
  console.log(demo);
  demo.classList.add("animundo");
}

