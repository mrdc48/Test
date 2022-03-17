

let menu = document.querySelector(".hamburger_menu");
let navbar_data = document.querySelector('.navbar_links');
let data_1 = document.querySelector('.bar_1');
let data_2 = document.querySelector('.bar_2');
let data_3 = document.querySelector('.bar_3');

var slider = document.querySelectorAll(".slider_container");
var index = 0;


menu.addEventListener("click",()=>{
 navbar_data.classList.toggle("visible");
 data_1.classList.toggle("first_line");
 data_2.classList.toggle("second_line");
 data_3.classList.toggle("third_line");
})

let  next =  () => {
    slider[index].classList.remove("active");
    index = (index + 1 ) % slider.length;
    slider[index].classList.add("active");
}
let previous = () => {
    slider[index].classList.remove("active");
    index = (index - 1 + slider.length ) % slider.length;
    slider[index].classList.add("active");
}
setInterval(next,3000);