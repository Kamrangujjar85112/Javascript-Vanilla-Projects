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
let name= 'kami';
function kam(){
    let name='gujjar';
    

}
kam();
console.log(name);