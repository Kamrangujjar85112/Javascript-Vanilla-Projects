//using selectors inside the element
const questions = document.querySelectorAll('.question');

questions.forEach(function(query){
    const button = query.querySelector('.question-btn');
    button.addEventListener('click', function(){
        questions.forEach(function(item){
            if(item!== query){
                item.classList.remove('show-text');
            }
        });
       

        query.classList.toggle('show-text');
    });
});
// traversing the dom
// const btns = document.querySelectorAll('.question-btn');

// btns.forEach(function(btn){
//     btn.addEventListener('click',function(question){
//         const e = question.currentTarget.parentElement.parentElement;
    
//         e.classList.toggle('show-text');
//     });
    
// });