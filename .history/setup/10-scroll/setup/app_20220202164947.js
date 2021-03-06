// Element.getBoundingClientRect() method returns the size of an element and its position relative to the viewport.
// pageYOffset is a read - only window property that returns the number of pixels the document has been scrolled vertically.
// slice extracts a section of a string without modifying original string
//offsetTop - A Number, representing the top position of the element, in pixels

// ********** set date ************
const date = document.getElementById('date');
date.innerHTML = new Date().getFullYear();
// ********** close links ************
const navToggle = document.querySelector('.nav-toggle');
const linksContainer = document.querySelector('.links-container');
const linksHeight = document.querySelector('.links');
navToggle.addEventListener('click',function(){
    const containerHeight = linksContainer.getBoundingClientRect().height;
    const linksHeight = links.getBoundingClientRect().height;
    if(containerHeight===0){
        linksContainer.getElementsByClassName.height===`${linksHeight}px`
    }else{
        linksContainer.getElementsByClassName.height = 0;
    }
});

// ********** fixed navbar ************

// ********** smooth scroll ************
// select links
