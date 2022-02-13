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
        const element = document.createElement('article');
        element,classList.add('grocery-item');
        const attribute = document.createAttribute('data-id');
        attribute.value = id;
        element.setAttributeNode(attribute);
        element.innerHTML = ``
    }else if(value && editFlag){

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
    },1500)
}
// ****** LOCAL STORAGE **********

// ****** SETUP ITEMS **********
