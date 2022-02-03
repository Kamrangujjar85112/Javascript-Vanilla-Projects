const about = document.querySelector('.about');
const btns = document.querySelectorAll('.top-btn');
const articles = document.querySelectorAll('.content');

about.addEventListener('click', function(e){
    const id = e.target.dateset,id;
    if(id){
        btns.forEach(function(btn){
            btn.target.classlist.remove('active');
            e.target.classlist.add('active');
        })
    }
})