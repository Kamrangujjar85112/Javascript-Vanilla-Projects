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

let tempDate = new Date();
let tempYear = tempDate.getFullYear();
let tempMonth = tempDate.getMonth();
let tempDay = tempDate.getDay();

const futureDate = new Date(tempYear,tempMonth,tempDay +10, 12, 00);

const year = futureDate.getFullYear();
const month = months[futureDate.getMonth()];
const date = futureDate.getDate();

const day = weekdays[futureDate.getDay()];
const hour = futureDate.getHours();
const min = futureDate.getMinutes();

giveaway.textContent = `giveaway ends on ${day} , ${date} ${month} ${year}, ${hour}:0${min}am`

const futureTime = futureDate.getTime();

function remainingTime(){
  const today = new Date().getTime();
  const time = futureTime - today;

  const oneDay = 24*60*60*1000;
  const oneHour = 60*60*1000;
  const oneMinute = 60*1000;

  let days = Math.floor(time / oneDay); 
  let hours = Math.floor((time % oneDay) / oneHour); 
  let minutes = Math.floor((time % oneHour) / oneMinute); 
  let seconds = Math.floor((time % oneMinute) / 1000); 

  const values =[days, hours, minutes, seconds];
  function format(item){
    if(item < 10){
      return (item = `0${item}`);
    }
    return item;
  }
  items.forEach(function (item, index) {
    item.innerHTML =format(values[index]);
  });
  if(time < 0){
    clearInterval(countdown);
    deadline.innerHTML = `<h4 class="expired">sorry, this giveaway has expired</h4>`;
  }
}
let countdown = setInterval(remainingTime, 1000);

remainingTime();
