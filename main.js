// READ MORE BUTTOM

const readMore = document.querySelector('.read-more-btn');
const para = document.querySelector('.text');

readMore.addEventListener('click', (e)=>{
    para.classList.toggle('show-more');
    if(readMore.innerHTML === 'Read More'){
        readMore.innerHTML = 'Read Less';
    }else{
        readMore.innerHTML = 'Read More';
    }
})


// PRE LOADING OF LANDING PAGRE
var preloader = document.getElementById('loader-wrapper');

function myFunction(){
    preloader.style.display = 'none';
}