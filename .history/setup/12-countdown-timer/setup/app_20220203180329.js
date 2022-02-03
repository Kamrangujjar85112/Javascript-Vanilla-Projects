const months = [
  "January",
  "February",
  "March",
  "April",
  "May",
  "June",
  "July",
  "August",
  "September",
  "October",
  "November",
  "December",
];
const weekdays = [
  "Sunday",
  "Monday",
  "Tuesday",
  "Wednesday",
  "Thursday",
  "Friday",
  "Saturday",
];

const giveaway = document.querySelector('.giveaway');
const deadline = document.querySelector('.deadline');
const items = document.querySelectorAll('.deadline-format h4');

const futureDate = new Date(2022, 02, 10, 12, 30, 00);

const year = futureDate.getFullYear();
const month = months[futureDate.getMonth()];
const date = futureDate.getDate();
const day = weekdays[futureDate.getDay()];
const hour = futureDate.getHours();
const min = futureDate.getMinutes();

giveaway.textContent = `giveaway ends on ${day} , ${date} ${month} ${year}, ${hour}:${min}am`

const futureTime = futureDate.getTime();

function remainingTime(){
  const today = new Date().getTime();
  const time = futureDate - today;

  const oneDay = 24*60*60*1000;
  const oneHour = 60*60*1000;
  const oneMinute = 60*1000;

  const days = Math.floor(time / oneDay); 
  const hours = Math.floor((time % oneDay) / oneHour); 
  const minutes = Math.floor((time % oneHour) / oneMinute); 
  const seconds = Math.floor((time % oneMinute) / 1000); 

  const values = [days, hours, minutes, seconds];

  items.forEach(function(item, index){
    item.innerHTML = values[index];
  })

}
