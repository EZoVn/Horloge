let hrs = document.getElementById('hrs');
let min = document.getElementById('min');
let sec = document.getElementById('sec');
let day = document.getElementById('day');
let month = document.getElementById('month');
let year = document.getElementById('year');
let dayDate = document.getElementById('dayDate');

setInterval(() => {
  let date = new Date();
  let hours = (date.getHours() < 10 ? '0' : '') + date.getHours();
  let minutes = (date.getMinutes() < 10 ? '0' : '') + date.getMinutes();
  let seconds = (date.getSeconds() < 10 ? '0' : '') + date.getSeconds();

  day.innerHTML = date.toLocaleDateString('en-US', { weekday: 'long' });
  dayDate.innerHTML = date.getDate();
  month.innerHTML = (date.getMonth() + 1 < 10 ? '0' : '') + (date.getMonth() + 1);
  year.innerHTML = date.getFullYear();

  hrs.innerHTML = hours;
  min.innerHTML = minutes;
  sec.innerHTML = seconds;
}, 1000);