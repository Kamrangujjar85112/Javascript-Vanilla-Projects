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
        const deleteBtn = element.querySelector('.delete-btn');
        const editBtn = element.querySelector('.edit-btn');
        deleteBtn.addEventListener('click',deleteItem);
        editBtn.addEventListener('click',editItem);
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
            editElement.innerHTML = value;
            displayAlert('Item edited','success')
            // edit local storage
            editLocalStorage(editID,value);
            setBackToDefault();
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
    },1000)
}
// clearItems function
function clearItems(){
    const items = document.querySelectorAll('.grocery-item');
    if(items.length > 0){
        items.forEach(function(item){
            list.removeChild(item)
        });
    }
    container.classList.remove('show-container');
    displayAlert('items are cleared','danger');
    setBackToDefault(); 
    localStorage.removeItem('list');
}
// deleteItem
function deleteItem(e) {
    const element = e.currentTarget.parentElement.parentElement;
    const id = element.dataset.id;
    list.removeChild(element);
    if(list.children.length === 0){
        container.classList.remove('show-container');
    }
    displayAlert('item deleted','danger');
    setBackToDefault();
    // removeFromLocalStorage
    removeFromLocalStorage(id);
}
// editItem
function editItem(e) {
    const element = e.currentTarget.parentElement.parentElement;
    editElement = e.currentTarget.parentElement.previousElementSibling;
    grocery.value = editElement.innerHTML;
    editFlag = true;
    editID= element.dataset.id;
    submitBtn.textContent = 'edit';

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
    const grocery = {id, value};
    let items = addToLocalStorage();
    items.push(grocery);
    localStorage.setItem('list',JSON.stringify(items))
}
function removeFromLocalStorage(id){
    let items = addToLocalStorage();
    items.filter(function(item){
        if(item.id !== id);
        return item;
    })
    localStorage.setItem('list',JSON.stringify(items));
}
function editLocalStorage(id,value){

}
function addToLocalStorage(){
    return localStorage.getItem('list')? JSON.parse(localStorage.getItem('list')) : [];
}
// ****** SETUP ITEMS **********
