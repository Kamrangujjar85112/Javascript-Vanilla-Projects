const about = document.querySelector('.about');
const btns = document.querySelector('.tab-btn');
const articles = document.querySelector('.content');

about.addEventListener('click',function(e){
    const id = e.target.dataset.id;
    if(id){

        btns.forEach(function(btn){
            btn.target.classList.remove('active');
            e.classList.add('active');
        });
        articles.forEach(function(article){
            article.target.classList.remove('active');
        });
        const element = document.getElementById(id);
        element.target.classList.add('active');
    }
})