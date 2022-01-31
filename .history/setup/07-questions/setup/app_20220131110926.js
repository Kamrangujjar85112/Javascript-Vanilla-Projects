//using selectors inside the element


// traversing the dom
const btns = document.querySelectorAll('.question-btn');

btns.forEach(function(btn){
    btn.addEventListener('click',function(question){
        const e = question.currentTarget.parentElement.parentElement;
    
        e.classList.toggle('show-text');
    });
    
});