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
// form-submit
form.addEventListener('submit',addItem);
// clearItems
clearBtn.addEventListener('click',clearItems);
// ****** FUNCTIONS **********
function addItem(e){
    e.preventDefault();
    const value = grocery.value;
    const id = new Date().getTime().toString();
 
    if(value && !editFlag){
        const element = document.createElement('article');
        element.classList.add('grocery-item');
        const attribute = document.createAttribute('data-id');
        attribute.value = id;
        element.setAttributeNode(attribute);
        element.innerHTML = ` <p class="title">${value}</p>
        <div class="btn-container">
          <button type="button" class="edit-btn">
          <i class="fas fa-edit"></i>
          </button>
          <button type="button" class="delete-btn">
          <i class="fas fa-trash"></i>
          </button>
        </div>`;
// append child
list.appendChild(element);
// displayAlert
displayAlert('item has been added','success');
// show container
container.classList.add('show-container');
// add to local storage
addToLocalStorage(id,value);
setBackToDefault();
    }else if(value && editFlag){
console.log('I');
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
// clearItems function
function clearItems(){
    const items = document.querySelectorAll('grocery-item');
    if(items.length > 0){
        items.forEach(function(item){
            list.removeChild(item)
        });
    }
    container.classList.remove('show-container');
    displayAlert('items are cleared','danger');
    setBackToDefault();
}
// setBackToDefault
function setBackToDefault(){
    grocery.value = '';
    editFlag = false;
    editID = '';
    submitBtn.textContent = 'submit';
}
// ****** LOCAL STORAGE **********
function addToLocalStorage(id,value){

}
// ****** SETUP ITEMS **********
