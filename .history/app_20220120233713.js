// //SWITCH STATEMENT// 

// const dice= 7;
// switch(dice){
//     case 1:
//         console.log('one');
//     break;
//     case 2:
//         console.log('two');
//     break;
//     case 3:
//         console.log('three');
//     break;
//     case 4:
//         console.log('four');
//     break;
//     case 5:
//         console.log('five');
//     break;
//     case 6:
//         console.log('six');
//     break;
//     default:
//         console.log('roll the dice');
// }
//  // --------------------------------------------------------------------

//  // While Loop

//  let cats = 20;
//  while (cats > 0){
//      console.log('I have ' + cats + " cats");
//  cats--;
//  }
//  // --------------------------------------------------------------------
//  // Do-While Loop

//   let books= 0;
//  do {
//      console.log('you have ' + books + ' books');
//      books++ ;
//  }
//  while (books < 10);

// // ---------------------------------------------------------------------

// // For Loop

// // ex:1 increment
// let a;
// for( a=1; a<=10; a++){
//     console.log('a is ' +a);
// }
// // ex:2 decrement
// for(let number=10; number>=1; number--){
//     console.log('number is '+number);
// }

// // ---------------------------------------------------------------------

// // // String Methods

// let name = 'kamran';
// console.log(name.length);
// console.log(name.toUpperCase());
// console.log(name.toLowerCase());
// console.log(name.charAt(1 , 4));
// console.log(name.charAt(-3));
// console.log(name.trim());
// console.log(name.indexOf('n'));
// console.log(name.slice(2));
// console.log(name.slice(-3));
// const person= 'kamran';
// const age= 26;
// const bio=(`my name is ${person} and my age is ${age}`);
// console.log(bio);

// // ---------------------------------------------------------------------

// // Array methods and properties(concat, reverse, unshift, shift, push, pop, splice)

// const coders= ['amir','muneeb','muazzam','hamid'];
// const support= ['usama','muteeb','kamran'];

// // concat
// const oscorb= coders.concat(support);
// console.log(oscorb);

// // reverse
// console.log(oscorb.reverse());

// // unshift

// oscorb.unshift('dkd');
// console.log(oscorb);

// // shift
// oscorb.shift();
// console.log(oscorb);

// // push

// oscorb.push('zafar');
// console.log(oscorb);

// // pop
// oscorb.pop();
// console.log(oscorb);

// // splice

// const react= oscorb.splice(1, 3);
//  console.log(react);
//  console.log(oscorb);


// // Array and for loop

// // ex1
// const firstName = ['abrar','bilal','ali','aoun'];
// const surName= 'Khan';
// let name= [];
// for ( let a = 0; a < firstName.length; a++ ){
// console.log(a);
// console.log(firstName[a]);
// const fullName=`${firstName[a]} ${surName}`;
// name.push(fullName);
// }
// console.log(firstName);
// console.log(name);

// // ex 2
// const name = 'Gate';
// const gates = ['1','2','3','4'];
// let gatesAre = [];
// for(let g = 0; g < gates.length; g++)
// {
//     const gateName = `${name} No: ${gates[g]}`;
//     gatesAre.push(gateName);
// }
// console.log(gatesAre);

// //---------------------------------------------------------------------

// // Calculate total function
// // ex 1
// const a = [90, 80, 70, 60];
// const b = [10, 20, 30, 40];

// function calculateTotal(arr){
//     let total = 0; 
//     for(let i = 0; i < arr.length; i++){
//     total += arr[i];
//     }
//     return total;
// }
// const atotal= calculateTotal(a);
// const btotal= calculateTotal(b);
// console.log({
//     a: atotal,
//     b: btotal,
// });

// // ex 2
// const maths = [20, 30, 40, 50];
// const English = [90, 80, 50, 70];

// function calculateMarks(num){
//     const marks = 0;
//     for(let m = 0; m < num.length; m++){
//         marks += num[m];
//     }
//     return marks;
// }
// const s = calculateMarks(maths);
// const w = calculateMarks(English);

// console.log({
//     Math_Marks: s,
//     English_Marks: w,
// });

// // ---------------------------------------------------------------------

// const number = 5 > 4;
// number ? console.log('it is true') : console.log('it is false');
// if(number){
//     console.log('it is true');
// }
// else{
//     console.log('it is false');
// }

// // ---------------------------------------------------------------------
// // global and local scope of a variable

// let name= 'kami';
// function kam(){
//     name='gujjar';
    

// }
// kam();
// console.log(name);

// // ---------------------------------------------------------------------

// // variable lookup

// // ex 1
// const globalVariable = 40;

// function add(num1 , num2){
//     const result = num1 + num2 + globalVariable;
//     function multiply(){
//         const globalVariable = 30;
//         const multiplyResult = result * globalVariable;
//         console.log(multiplyResult);
//     }
    
//     multiply();
//     return result;
// }
// console.log(add(30, 40));

// // ex 2
// const globalVariable = 40;

// function add(num1 , num2){
//     const result = num1 + num2 + globalVariable;
//     function multiply(){
//         const globalVariable = 30;
//         multiplyResult = result * globalVariable;
//     }
//     multiply();
//     console.log(multiplyResult);
   
//     return result;
// }
// console.log(add(30, 40));

// // ---------------------------------------------------------------------

// // // call back function
// function morning(name){
//     return `Good Morning ${name}`;
// }
// function afternoon(name){
//     return `Good fternoon ${name}`;
// }
// function evening(name){
//     return `Good Evening ${name}`;
// }
// function greeting(name, cb){
//     const myName = `Kamran`;
//     console.log(`${cb(name)} my name is ${myName}`);

// }
// greeting('Irfan', morning);
// greeting('Irfan', afternoon);
// greeting('Irfan', evening);

// // ---------------------------------------------------------------------

// // Array Iteraters

// const Oscorb = [
//     {name:'Muazzam' , role: 'Laravel Developer'},
//     {name:'Amir' , role: '.Net Developer'},
//     {name:'Muneeb' , role: '.Net Developer'},
//     {name:'Hamid' , role: 'React Developer'},
//     {name:'Muteeb' , role: 'Internee'},
//     {name:'Usama' , role: 'Internee'},
//     {name:'Kamran' , role: 'Internee'},
// ];


// Oscorb.forEach(function Job(Employee) {
//     console.log(Employee.name.toUpperCase());
    
// });

// // ---------------------------------------------------------------------

// // 
// const Oscorb = [
//     {name:'Muazzam' , role: 'Laravel Developer'},
//     {name:'Amir' , role: '.Net Developer'},
//     {name:'Muneeb' , role: '.Net Developer'},
//     {name:'Hamid' , role: 'React Developer'},
//     {name:'Muteeb' , role: 'Internee'},
//     {name:'Usama' , role: 'Internee'},
//     {name:'Kamran' , role: 'Internee'},
// ];

// const names = Oscorb.map(function display(team) {
//     return `<h1>${team.name}</h1>`;
// });
//     document.body.innerHTML = names.join('');

// console.log(names);
// const roles = Oscorb.map(function showAge(ageing) {
//     return `<h2>${ageing.role}</h2>`;
// });
// console.log(roles);

// // ---------------------------------------------------------------------

// // Quiz
// // 1 :- change Hamza to Muneeb  
// // 2 :- React developer to Full-stack developer  
// // 3 :- change ali to name and role them also   

// // Question:
// const firstArray = [
//     {name:'Amir' , role: '.Net Developer', age:  25},
//     {name:'Hamza' , role: '.Net Developer', age:  40},
//     {name:'Hamid' , role: 'React Developer', age:  92},
//     "ali",
//     {name:'Muteeb' , role: 'Internee', age:  30},
// ];

// const newArray = firstArray.map((data)=> {

//     // change Hamza to Muneeb

//     const replaceName = {name:'Muneeb' , role: '.Net Developer', age:  40};
//     if (data.name === "Hamza" ){
//         return replaceName;
//     }

//     //React developer to Full-stack developer

//     const replaceRole = {name:'Hamid' , role: 'Full-stack Developer', age:  92};
//     if (data.role === "React Developer" ){
//         return replaceRole;
//     }

//     // change ali to name and role them also

//     const addRole = {name:'ali' , role: 'laravel Developer' , age:  24};
//     if (data === "ali") {
//         return addRole;
//     }
//     return data;
// });
// console.log(newArray);

// // ---------------------------------------------------------------------

// // Filter Example

// const firstArray = [
//     {name:'Amir' , role: '.Net Developer', age:  25},
//     {name:'Hamza' , role: '.Net Developer', age:  40},
//     {name:'Hamid' , role: 'React Developer', age:  92},
//     "ali",
//     {name:'Muteeb' , role: 'Internee', age:  30},
// ];
// const youngPeople= firstArray.filter((data)=>{
//     return data.age <= 40;
// });
// console.log(youngPeople);

// // ---------------------------------------------------------------------

// // Find example

// const team = [
//     {name:'Muazzam' , role: 'Laravel Developer', salary: 50000, id: 1},
//     {name:'Amir' , role: '.Net Developer', salary: 45000, id: 2},
//     {name:'Muneeb' , role: '.Net Developer', salary: 40000, id: 3},
//     {name:'Hamid' , role: 'React Developer', salary: 35000, id: 4},
//     {name:'Muteeb' , role: 'Internee', salary: 30000, id: 5},
//     {name:'Usama' , role: 'Internee', salary: 25000, id: 6},
//     {name:'Kamran' , role: 'Internee', salary: 20000, id: 7},
// ];
// const people= team.find((data)=>{
//     return data.salary === 30000;
// });
// console.log(people);

// // Reduce function

// const team = [
//     {name:'Muazzam' , role: 'Laravel Developer', salary: 50000, id: 1},
//     {name:'Amir' , role: '.Net Developer', salary: 45000, id: 2},
//     {name:'Muneeb' , role: '.Net Developer', salary: 40000, id: 3},
//     {name:'Hamid' , role: 'React Developer', salary: 35000, id: 4},
//     {name:'Muteeb' , role: 'Internee', salary: 30000, id: 5},
//     {name:'Usama' , role: 'Internee', salary: 25000, id: 6},
//     {name:'Kamran' , role: 'Internee', salary: 20000, id: 7},
// ];
// const totalIncome= team.reduce((cash, currSalery)=>{
//     console.log(`Total Cash ${cash}`);
//     console.log(`Cash collected from the person: ${currSalery.salary}`);
//     cash += currSalery.salary;
//     return cash;
// }, 0);
// console.log(`Total Cash:`,totalIncome);

// // ---------------------------------------------------------------------

// // Math Object

// const value = Math.random(number); // below zero form 0.00 to 0.99
// const value = Math.random(number) * 10; // from 0 to 9
// const value = Math.floor(number); // roundabout of given value
// const value = Math.ciel(number); // roundabout of +1 value
// const value = Math.floor(Math.random(number)); // roundabout of random value always show zero 
// const value = Math.ciel(Math.random(number)); // roundabout of random value always show zero 
// const value = Math.floor(Math.random( ) * 10); // roundabout of  value always show zero 
// const value = Math.ceil(Math.random(number) * 10); // roundabout of +1 value always show zero 
// const value = Math.floor((number) * 10); // roundabout from 0 to 9 if taken the value below 1
// const value = Math.floor((number) * 10); // roundabout from 0 to 9 if taken the value below 1
// const value = Math.sqrt(number); // to take the squareroot of the value
// const value = Math.PI; // to take the pi value
// const value = Math.max(20,30,30,50,40,60,90,900,800,600,700,1000); // to find the max value
// const value = Math.min(20,30,30,50,40,60,90,900,800,600,700,1000); // to find the min value
// console.log(value);

// // ---------------------------------------------------------------------

// // Date 

// const months= [
//     "January",
//     "February",
//     "March",
//     "April",
//     "May",
//     "June",
//     "July",
//     "August", 
//     "September",
//     "October",
//     "November",
//     "December"
// ];
// const days = [
//     "Sunday",
//     "Monday",
//     "Tuesday",
//     "Wednesday",
//     "Thursday",
//     "Friday",
//     "Saturday"
// ];
// const date = new Date();
// const month= date.getMonth();
// console.log(months[month]);

// const day= date.getDay();
// console.log(days[day]);

// console.log(date.getFullYear());

// console.log(date.getDate());

// const sentence= `<h1>${days[day]}, ${date.getDate()} ${months[month]} ${date.getFullYear()}</h1>`;
// document.body.innerHTML = sentence;

// // try
// const date = new Date(`11/08/1996`);

// const day = date.getDay();
// console.log(days[day]);

// console.log(date.getDate());

// const month = date.getMonth();
// console.log(months[month]);

// console.log(date.getFullYear());

// const sentence = `${days[day]}, ${date.getDate()} ${months[month]} ${date.getFullYear()}`;
// document.body.innerHTML = sentence;

// // ---------------------------------------------------------------------

// // --------------------------------DOM--------------------------------

// document.body.style.backgroundColor = 'white';
// document.body.style.color = 'blue';

// // ---------------------------------------------------------------------

// // get element by id

// document.getElementById('btn').style.backgroundColor = 'red';
// document.getElementById('btn').style.color = 'white'; 

// // ---------------------------------------------------------------------

// // get element by tagname

// const list = document.getElementsByTagName('li');

// const allLists = [...list]; // it is better to use this method, instead of forEach loop as for each is not a function.

// console.log(allLists);

// // ---------------------------------------------------------------------

// // get element by classname

// const list = document.getElementsByClassName('unordered');

// const allLists = [...list]; // it is better to use this method, instead of forEach loop as for each is not a function.

// console.log(allLists);

// // ---------------------------------------------------------------------

// // queryselector

// const item = document.querySelector('.listItem');
// console.log(item);
// const lastItem = document.querySelector('li:last-child');
// console.log(lastItem);
// const items = document.querySelectorAll('.listItem');
// console.log(items);

// // ---------------------------------------------------------------------

// // queryselectorall

// const items = document.querySelectorAll('.listItem');
// items.forEach((lists)=>{
//     console.log(lists);
//     lists.style.color = 'green';
// });

// // ---------------------------------------------------------------------

// // getting children by function

// const items = document.querySelector('#list');
// const childItems = items.children;
// console.log(childItems);
// console.log(items.firstChild);
// console.log(items.lastChild);

// // ---------------------------------------------------------------------

// // nextSibling

// const listItem1 = document.querySelector('.listItem');
// const listItem2 = (listItem1.nextSibling.nextSibling.style.color = 'blue');
// console.log(listItem2);

// // ---------------------------------------------------------------------

// // previousSibling

// const lastItem = document.querySelector('#listItem');
// const secLastItem = (lastItem.previousSibling.previousSibling.style.color = 'green');
// console.log(secLastItem);

// // ---------------------------------------------------------------------

// // nextElementSibling

// const firstItem = document.querySelector('. listItem');
// const secItem = (firstItem.nextElementSibling.style.color = 'blue');
// console.log(secItem);

// // ---------------------------------------------------------------------

// // previousElementSibling

// const lastItem = document.querySelector('#listItem');
// const secLastItem = (lastItem.previousElementSibling.style.color = 'grey');
// console.log(secLastItem);

// // ---------------------------------------------------------------------

// // nodevalue
// const item = document.getElementById('listItem1');
// const value = item.firstChild.nodeValue;
// console.log(value);

// // ---------------------------------------------------------------------

// // textContent

// const newItem = document.getElementById('listItem1');
// const newValue = newItem.textContent;
// console.log(newValue);

// // ---------------------------------------------------------------------

// const listItem1 = document.querySelector('.black');
// const idListItem1 = listItem1.getAttribute('id');
// console.log(idListItem1); 

// const linkFind = document.getElementById('newpage');
// const hrefFind = linkFind.getAttribute('href');
// console.log(hrefFind);

// const att = linkFind.nextElementSibling;
// att.setAttribute('class', 'orange');
// att.textContent = 'I have orange suits';
// console.log(att);

// // Class Name/ classList

// const first = document.getElementById('ist');
// const second = document.getElementById('2nd');
// const third = document.getElementById('3rd');
// const fourth = document.getElementById('4th');

// // className

// first.className = 'color';
// second.className = 'text';

// // ---------------------------------------------------------------------

// // classList

// first.classList = 'color';
// second.classList.add('color', 'text');
// second.classList.remove('color');
// let result = second.classList.contains('text');
// if(result){
//     console.log('hello world');
// }
// else{
//     console.log('dont have');
// }

// // ---------------------------------------------------------------------

// // createElement 
// // createTextNode
// // appendChild

// const result = document.querySelector('#result');
// const newDiv = document.createElement('div');
// const text = document.createTextNode('we are here to make a div');
// newDiv.appendChild(text);
// newDiv.classList.add('blue');
// document.body.appendChild(newDiv);


// const heading = document.createElement('h2');
// const headingText = document.createTextNode('hey this is heading 2');
// heading.appendChild(headingText);
// heading.classList.add('red');
// result.appendChild(heading);

// // ---------------------------------------------------------------------

//  // insert before (item , location)

// const result = document.querySelector('#result');
// const first = document.querySelector('.blue'); //create for the insertion of element before that heading element.
// const newDiv = document.createElement('div');
// const divtext = document.createTextNode('this is new div');
// newDiv.appendChild(divtext);
// newDiv.classList.add('blue');
// document.body.insertBefore(newDiv , result);

// const heading1 = document.createElement('h1');
// const headingText = document.createTextNode('this is heading 1');
// heading1.appendChild(headingText);
// result.insertBefore(heading1, first);

// // ---------------------------------------------------------------------

// // replace child(new , old)

// const result = document.querySelector('#result');
// const first = document.querySelector('.blue'); //create for the insertion of element before that heading element.

// const newDiv = document.createElement('div');
// const divtext = document.createTextNode('this is new div');
// newDiv.appendChild(divtext);
// newDiv.classList.add('blue');
// document.body.insertBefore(newDiv , result);

// const heading1 = document.createElement('h1');
// const headingText = document.createTextNode('this is heading 1');
// heading1.appendChild(headingText);
// result.insertBefore(heading1, first);

// const heading6 = document.createElement('h6');
// const heading6Text = document.createTextNode('this is heading 6');
// heading6.appendChild(heading6Text);
// document.body.replaceChild(heading6 , newDiv);

// // ---------------------------------------------------------------------

// // prepend method / innerText

// const heading2 = document.createElement('h2');
// heading2.innerText = 'this is heading 2';
// document.body.prepend(heading2);

// // ---------------------------------------------------------------------

// // remove / removechild

// // remove
//  const result = document.querySelector('#heading1');
//  result.remove();

// // ---------------------------------------------------------------------

// //removeChild
//  const result = document.querySelector('#result');
//  const heading2 = result.querySelector();
//  result.removeChild('heading2');

// // ---------------------------------------------------------------------

// // innerHTML / textContent

// const newDiv = document.createElement('div');
// const divText = document.createTextNode('hey! this is a div');
// newDiv.appendChild(divText);
// document.body.appendChild(newDiv);

// const heading = document.createElement('h3');
// const headText = document.createTextNode('this is heading 3');
// heading.appendChild(headText);
// newDiv.appendChild(heading)

// const value1 = `you are great`;

// const ul1 = document.createElement('ul');
// ul1.innerHTML = 
// `kamran ${value1}
// <li>this is list 1</li>
// <li>this is list 2</li>
// <li>this is list 3</li>`;

// newDiv.appendChild(ul1);

// const value2 = `you are great`;

// const ul2 = document.createElement('ul');
// ul2.textContent = 
// `kamran ${value2}
// <li>this is list 1</li>
// <li>this is list 2</li>
// <li>this is list 3</li>`;

// newDiv.appendChild(ul2);

// // ---------------------------------------------------------------------

// // innerHtml

// const value = `you are great`;
// const ul = document.createElement('ul');
// ul.innerHTML = 
// `kamran ${value}
// <li>this is list 1</li>
// <li>this is list 2</li>
// <li>this is list 3</li>`;

// document.body.appendChild(ul);

// // ---------------------------------------------------------------------

// // TextContent

// const value = `you are great`;

// const ul = document.createElement('ul');

// ul.textContent = 
// `kamran ${value}
// <li>this is list 1</li>
// <li>this is list 2</li>
// <li>this is list 3</li>`;

// document.body.appendChild(ul);

// // ---------------------------------------------------------------------

// const button = document.querySelector('.btn'); 
// const heading = document.querySelector('h1'); 
// const paragraph = document.querySelector('p'); 

// function changeColors(){
// let haveClass = heading.classList.contains('red');
// if(haveClass){
//     heading.classList.remove('red');
// }
// else{
//     heading.classList.add('red');
// }
// }

// button.addEventListener('click' , changeColors);

// // ---------------------------------------------------------------------

// // Mouse Events

// const heading = document.querySelector('h1');
// const button = document.querySelector('.btn');
// const para = document.querySelector('p');


// button.addEventListener('click' , function(){
//     console.log('button clicked');
// });
// button.addEventListener('mousedown' , function(){
//     para.classList.add('red');
// }); 
// button.addEventListener('mouseup' , function(){
//     para.classList.remove('red');
// });
// heading.addEventListener('mouseenter' , function(){
//     heading.classList.add('blue');
// });
// heading.addEventListener('mouseleave' , function(){
//     heading.classList.remove('blue');
// });

// // ---------------------------------------------------------------------

// // Key events

// const inputText = document.getElementById('name');

// // inputText.addEventListener('keypress' , function(){
// //     console.log('key is pressed');
// // });
// // inputText.addEventListener('keydown' , function(){
// //     console.log('key is pressed');
// // });
// inputText.addEventListener('keyup' , function(){
//     console.log(inputText.value);
// });

// // ---------------------------------------------------------------------

// // EVENT OBJECT

// // event object argument e, event(used for the event)
// // info about triggered event (gives the information of the object which is used by the eventlistner)

// const heading = document.querySelector('h1');
// heading.addEventListener('click' , function(event){
//     console.log(event);
// });

// const button = document.querySelector('.btn');
// button.addEventListener('click' , function(event){
//     console.log(event);
// });

// // ---------------------------------------------------------------------

// // event.type (gives the type of eventlistner which is used for the object)

// const heading = document.querySelector('h1');
// heading.addEventListener('click' , function(event){
//     console.log(event.type);
// });

// const button = document.querySelector('.btn');
// button.addEventListener('click' , function(event){
//     console.log(event.type);
// });

// // ---------------------------------------------------------------------

// // event.currentTarget(to target that object)

// const heading = document.querySelector('h1');
// heading.addEventListener('click' , function(event){
//     console.log(event.currentTarget);
// });

// const button = document.querySelector('.btn');
// button.addEventListener('click' , function(event){
//     console.log(event.currentTarget);
// });

// // ---------------------------------------------------------------------

// // add the class by currentTarget

// const heading = document.querySelector('h1');
// heading.addEventListener('click' , function(event){
//     event.currentTarget.classList.add('blue');
// });

// // remove the class by current target

// const button = document.querySelector('.btn');
// button.addEventListener('click' , function(event){
//     event.currentTarget.classList.remove('btn');
// });

// // ---------------------------------------------------------------------

// // this keyword (replaceable of currenTarget but with traditional use, unable to use where arrow method function is used)

// const heading = document.querySelector('h1');
// heading.addEventListener('click' , (event)=>{
//     console.log(this);
// });

// const button = document.querySelector('.btn');
// button.addEventListener('click' , function(event){
//     console.log(this);
// });

// // ---------------------------------------------------------------------

// // preventDafault()  prevent default behavior of an event 

// const link = document.getElementById('link');
// function somefunction(e){
//     e.preventDefault();
// }

// link.addEventListener('click' , somefunction);

// // ---------------------------------------------------------------------

// // CurrentTarget (hits the whole element on which the event is applied)

// const buttons = document.querySelectorAll('.btn');
//  buttons.forEach(function(btn){
//      btn.addEventListener('click', function(e){

//         console.log(e.currentTarget);
//         e.currentTarget.style.color = 'green'
//      });
//  });

// // ---------------------------------------------------------------------

// // Target (hit the element with in the element separately)
// const buttons = document.querySelectorAll('.btn');

//  buttons.forEach(function(btn){
//      btn.addEventListener('click', function(e){
//         console.log(e.target);
//         e.target.style.color = 'green'
//      });
//  });

// // ---------------------------------------------------------------------

// // showbubbling and capturing(order of the execution)
// // shiwBubbling is by default while and using capturing can eradicate the bubbling in a document.

// const list = document.querySelector('.list-items');
// const container = document.querySelector('.container');

// function showBubbling(e){
//     console.log('this is a currentTarget', e.currentTarget);
//     console.log('this is target', e.target);
// }

// container.addEventListener('click', showBubbling, {capture: true});
// document.addEventListener('click', showBubbling, {capture: true});
// window.addEventListener('click', showBubbling, {capture: true});
// list.addEventListener('click', showBubbling, {capture: true});

// // ---------------------------------------------------------------------

// // Another Example 

// const container = document.querySelector('.container');
// const button = document.querySelector('.btn');
// // const heading = document.querySelector('.heading');


// function sayHello(){
//     console.log('hey you clicked me');
// }
// button.addEventListener('click' , function(){
//     const item = document.createElement('h1');
//     item.classList.add('heading');
//     item.textContent = 'hey this is a great heading';
//     container.appendChild(item);
// });

// container.addEventListener('click', function(event){
//     if(event.target.classList.contains('heading')){
//         console.log('hello there');
//     }

// });

// // ---------------------------------------------------------------------

// // Form Submit

// const form = document.getElementById('form');
// const Name = document.getElementById('name');
// const password = document.getElementById('password');

// form.addEventListener('submit' , function(e){
//     e.preventDefault();
//     console.log('form Submitted');
//     console.log(Name.value);
//     console.log(password.value);
// });

const Km = document.getElementById('number');
const button = document.getElementById('btn');

button.addEventListener('click' , function(){
    const mile  = 1.609;
    const kiloMeters = Km * mile;
    alert(kiloMeters);
});