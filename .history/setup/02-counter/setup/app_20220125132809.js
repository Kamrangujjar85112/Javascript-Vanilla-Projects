let count = 0;
const value = document.getElementById('value');
const buttons = document.querySelectorAll('.btn');

buttons.forEach(function(btns){
    btns.addEventListener('click',function(event){
        const counter = event.currentTarget.classList;
        if(counter.contains('increase')){
            count++;
        }else if(counter.contains('decrease')){
            count--;
        }else{
            count = 0;
        }
        if(count > 0){
            value.style.color = green;
        }
        if(count < 0){
            value.style.color = red;
        }
        if(count = 0){
            value.style.color = black;
        }
        
        value.textContent = count;
    });
});