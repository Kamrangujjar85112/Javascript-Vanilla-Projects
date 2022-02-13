// ****** SELECT ITEMS **********
const alert = document.querySelector('.alert');
const form = document.querySelector('.grocery-form');
const grocery = document.getElementById('grocery');
const submitBtn = document.querySelector('.submit-btn');
const container = document.querySelector('.grocery-container');
const list = document.querySelector('.grocery-list');
const clearBtn = document.querySelector('.clear-btn');

// edit option
let editElement;
let editFlag=false;
let editID="";
// ****** EVENT LISTENERS **********
form.addEventListener('submit',addItem);
// ****** FUNCTIONS **********
function addItem(e){
    e.preventDefault();
    const value = grocery.value;
    const id = new Date().getTime().toString();
    if(value && !editFlag){
        console.log('hi');
    }else if(value && editFlag){
        console.log('byr');
    }else{
        displayAlert('please enter a value','danger')
    }
}
// displayAlert
function displayAlert(text, action){
    alert.textContent = text;
    alert.classList.add(`alert-${action}`);
    // removealert
    setTimeout(function(){
        alert.textContent= "";
        alert.classList.remove(`alert-${action}`);
    },2000)
}
// ****** LOCAL STORAGE **********

// ****** SETUP ITEMS **********
