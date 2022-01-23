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
//  // Do-While Loo

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
//     marks = 0;
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
// console.log(add(30, 40));\

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


//1 :- change Hamza to Muneeb  
//2 :- React developer to Full-stack developer  
//3 :- change ali to name and role them also   

const firstArray = [
    {name:'Amir' , role: '.Net Developer'},
    {name:'Hamza' , role: '.Net Developer'},
    {name:'Hamid' , role: 'React Developer'},
    "ali",
    {name:'Muteeb' , role: 'Internee'},
];
const newArray = firstArray.map(function display(names) {
    if (names= 'Hamza') {
        return "Muneeb";
        
    }
    return names;
});
console.log(newArray);