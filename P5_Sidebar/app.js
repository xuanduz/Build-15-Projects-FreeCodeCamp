const toggleBtn = document.querySelector('.sidebar-toggle');
const closeBtn = document.querySelector('.close-btn');
const showSidebar = document.querySelector('.sidebar');

toggleBtn.addEventListener('click', function(){
    showSidebar.classList.toggle('show-sidebar')
})
closeBtn.addEventListener('click', function(){
    showSidebar.classList.remove('show-sidebar')
})
// toggleBtn.addEventListener('click', function(){
//     console.log("show");
//     showSidebar.classList.toggle("show-sidebar")
// });