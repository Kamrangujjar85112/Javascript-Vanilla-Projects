let count = 0;
const value = document.getElementById('value');
const buttons = document.querySelectorAll('.btns');

buttons.forEach(function(btn){
    btn.addEventListener('click',function(event){
        const counter = event.currentTarget.classList;
        if(counter.contains('increase')){
            count++;
        }else if(counter.contains('decrease')){
            count--;
        }else{
            count = 0;
        }
        value.textContent = count;
    });
});