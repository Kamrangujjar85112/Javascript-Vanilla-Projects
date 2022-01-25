let count = 0;
const value = document.querySelector('#value');
const buttons = document.querySelectorAll('.btn');

buttons.forEach(function(btn){
    btn.addEventListener('click', function(event){
        const styling = event.currentTarget.classList;
        if(styling.contains('increase')){
            count++;
        }else if(styling.contains('decrease')){
            count--;
        }else{
            count = 0;
        }

    });
});