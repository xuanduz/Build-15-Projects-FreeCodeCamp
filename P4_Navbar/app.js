const navToggle = document.querySelector(".nav-toggle");
const links = document.querySelector(".links");

navToggle.addEventListener('click', function(){
    // if(links.classList.contains('links-hidden')){
    //     links.classList.remove('links-hidden');
    // }
    // else{
    //     links.classList.add('links-hidden');
    // }
    links.classList.toggle('links-hidden')
});