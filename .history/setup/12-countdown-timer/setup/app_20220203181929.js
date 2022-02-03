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

const futureDate = new Date(2022,1,2,9,0,0);

const year = futureDate.getFullYear();
const month = months[futureDate.getMonth()];
const date = futureDate.getDate();
const day = weekdays[futureDate.getDay()];
const hour = futureDate.getHours();
const min = futureDate.getMinutes();

giveaway.textContent = `giveaway ends on ${day} , ${date} ${month} ${year}, ${hour}:${min}pm`

const futureTime = futureDate.getTime();

function remainingTime(){
  const today = new Date().getTime();
  const time = futureDate - today;

  const oneDay = 24*60*60*1000;
  const oneHour = 60*60*1000;
  const oneMinute = 60*1000;

  let days = Math.floor(time / oneDay); 
  let hours = Math.floor((time % oneDay) / oneHour); 
  let minutes = Math.floor((time % oneHour) / oneMinute); 
  let seconds = Math.floor((time % oneMinute) / 1000); 

  const values = [days,hours,minutes,seconds];
  // function format(item){
  //   if(item < 10){
  //     return (item=`0${item}`)
  //   }
  //   return item
  // }

  items.forEach(function(item,index){
    item.innerHTML = values[index];
  });

}
remainingTime();
