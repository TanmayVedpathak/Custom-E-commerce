// // PAGES
const link1 = document.querySelector('#link-2');
const link2 = document.querySelector('#link-2');
const link3 = document.querySelector('#link-2');

const productContainer = document.getElementsByClassName("product-containers");

//TIMER
let countDownDate = new Date("April 8, 2022 15:37:25").getTime();

let x = setInterval( () =>{

  var now = new Date().getTime();

  var distance = countDownDate - now;

  // Time calculations for days, hours, minutes and seconds
  var days = Math.floor(distance / (1000 * 60 * 60 * 24));
  var hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
  var minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
  var seconds = Math.floor((distance % (1000 * 60)) / 1000);

  document.getElementById("sales-timer").innerHTML = days + "d " + hours + "h "
  + minutes + "m " + seconds + "s ";

  // If the count down is finished, write some text
  if (distance < 0) {
    clearInterval(x);
    document.getElementById("demo").innerHTML = "EXPIRED";
  }
}, 1000);
