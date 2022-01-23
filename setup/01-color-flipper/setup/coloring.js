const colors = ['0','1','2','3','4','5','6','7','8','9','A','B','C','D','E','F'];
const button = document.getElementById('btn');
const color = document.querySelector('.color');


button.addEventListener('click', function(){
    let addColorId = '#';
    for(i=0; i<6; i++){
        addColorId += colors[getRandomColor()];
    }
    color.textContent = addColorId;
    document.body.style.backgroundColor = addColorId;

})

function getRandomColor(){
    return Math.floor(Math.random() * colors.length);
}
