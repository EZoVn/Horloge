let hrs = document.getElementById('hrs');
let min = document.getElementById('min');
let sec = document.getElementById('sec');

setInterval(() => {
  let date = new Date();
  // let hours = date.getHours();
  let hours = (date.getHours() < 10 ? '0' : '') + date.getHours();
  let minutes = (date.getMinutes() < 10 ? '0' : '') + date.getMinutes();
  let seconds = (date.getSeconds() < 10 ? '0' : '') + date.getSeconds();

  hrs.innerHTML = hours;
  min.innerHTML = minutes;
  sec.innerHTML = seconds;
}, 1000);