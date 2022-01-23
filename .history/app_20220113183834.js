// SWITCH STATEMEN// const dice= 7;
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
// // --------------------------------------------------------------------// // While Loo// let cats = 20;
// while (cats > 0) {
//     console.log('I have ' + cats + " cats");
// cats--;
// // --------------------------------------------------------------------// Do-While Loo// let books= 0;
// do {
//     console.log('you have ' + books + ' books');
//     books++ ;
// }
// while (books < 10);

// ---------------------------------------------------------------------

// For Loop

// ex:1 increment
// let a;
// for( a=1; a<=10; a++){
//     console.log('a is ' +a);
// }
// ex:2 decrement
// for(let number=10; number>=1; number--){
//     console.log('number is '+number);
// }

// ---------------------------------------------------------------------

// String Methods

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

// ---------------------------------------------------------------------

// Array methods and properties(concat, reverse, unshift, shift, push, pop, splice)

const coders= ['amir','muneeb','muazzam','hamid'];
const support= ['usama','muteeb','kamran'];

// concat
const oscorb= coders.concat(support);
console.log(oscorb);

// reverse
console.log(oscorb.reverse());

// unshift

oscorb.unshift('dkd');
console.log(oscorb);

// shift
oscorb.shift();
console.log(oscorb);
