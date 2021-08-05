const menu = [{
        id: 1,
        title: "buttermilk pancakes",
        category: "breakfast",
        price: 15.99,
        img: "buttermilk-cake.jpg",
        desc: `Lorem ipsum dolor sit amet consectetur adipisicing elit. Molestias perferendis.`,
    },
    {
        id: 2,
        title: "diner double",
        category: "shakes",
        price: 12,
        img: "buttermilk-cake.jpg",
        desc: `Lorem ipsum dolor sit amet consectetur adipisicing elit. Molestias perferendis.`,
    },
    {
        id: 3,
        title: "three double",
        category: "shakes",
        price: 19,
        img: "buttermilk-cake.jpg",
        desc: `Lorem ipsum dolor sit amet consectetur adipisicing elit. Molestias perferendis.`,
    },
    {
        id: 4,
        title: "four double",
        category: "breakfast",
        price: 11.11,
        img: "buttermilk-cake.jpg",
        desc: `Lorem ipsum dolor sit amet consectetur adipisicing elit. Molestias perferendis.`,
    },
    {
        id: 5,
        title: "five double",
        category: "shakes",
        price: 5.55,
        img: "buttermilk-cake.jpg",
        desc: `Lorem ipsum dolor sit amet consectetur adipisicing elit. Molestias perferendis.`,
    },
    {
        id: 6,
        title: "six double",
        category: "lunch",
        price: 66.66,
        img: "buttermilk-cake.jpg",
        desc: `Lorem ipsum dolor sit amet consectetur adipisicing elit. Molestias perferendis.`,
    },
    {
        id: 7,
        title: "seven",
        category: "diner",
        price: 11.11,
        img: "buttermilk-cake.jpg",
        desc: `Lorem ipsum dolor sit amet consectetur adipisicing elit. Molestias perferendis.`,
    },
    {
        id: 8,
        title: "eight eight",
        category: "lunch",
        price: 8.8,
        img: "buttermilk-cake.jpg",
        desc: `Lorem ipsum dolor sit amet consectetur adipisicing elit. Molestias perferendis.`,
    },
    {
        id: 9,
        title: "nine",
        category: "lunch",
        price: 19.99,
        img: "buttermilk-cake.jpg",
        desc: `Lorem ipsum dolor sit amet consectetur adipisicing elit. Molestias perferendis.`,
    },
];

const sectionCenter = document.querySelector(".section-center");
const filterBtns = document.querySelectorAll(".filter-btn");

// load items
window.addEventListener("DOMContentLoaded", function() {
    displayMenuItems(menu);
});

// filter items
filterBtns.forEach(function(btn){
    btn.addEventListener('click', function(e){
        const category = e.currentTarget.dataset.id;
        const menuCategory = menu.filter(function(menuItem){
            if(menuItem.category === category){
                return menuItem;
            }
        });
        if(category === 'all'){
            displayMenuItems(menu);
        }
        else{
            displayMenuItems(menuCategory);
        }
    })
})

function displayMenuItems(menuItems){
    let displayMenu = menuItems.map(function(item) {
        return `<article class="menu-item">
        <img src="${item.img}" alt="" class="photo">
        <div class="item-info">
            <header>
                <h4>${item.title}</h4>
                <h4 class="price">${`$` + item.price}</h4>
            </header>
            <p class="text-item">
                ${item.desc}
            </p>
        </div>
        </article>`;
    });
    displayMenu = displayMenu.join("");
    sectionCenter.innerHTML = displayMenu;
}