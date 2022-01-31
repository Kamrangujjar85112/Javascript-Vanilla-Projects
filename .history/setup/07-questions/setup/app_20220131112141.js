//using selectors inside the element
const questions = document.querySelectorAll('question');

questions.forEach(function(queries){

        const values = queries.querySelector('.question-btn');
        
        values.addEventListener('click',function(){
            queries.classList.toggle('show-text');
    })
})

// traversing the dom
// const btns = document.querySelectorAll('.question-btn');

// btns.forEach(function(btn){
//     btn.addEventListener('click',function(question){
//         const e = question.currentTarget.parentElement.parentElement;
    
//         e.classList.toggle('show-text');
//     });
    
// });