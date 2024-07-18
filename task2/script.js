const mainToggle = document.getElementById("menu-btn");
const navBar = document.querySelector(".navbar");

mainToggle.addEventListener("click", () => {
    navBar.classList.toggle("active");

    // Toggle the icon
    if (mainToggle.classList.contains('fa-bars')) {
        mainToggle.classList.remove('fa-bars');
        mainToggle.classList.add('fa-xmark');
    } else {
        mainToggle.classList.remove('fa-xmark');
        mainToggle.classList.add('fa-bars');
    }
});

const products = [
    {
        id: 0,
        imgSrc: './images/pro1.jpg',
        brand: 'Best shoes just for you' ,
    },
    {
        id: 1,
        imgSrc: './images/pro2.jpg',
        brand: 'Shoes for everybody' ,
    },
    {
        id: 2,
        imgSrc: './images/pro3.jpg',
        brand: 'The best shoes ever' ,
    }
]

let currentIndex = 0;
const arrow_Left = document.querySelector(".fa-angle-left");
const arrow_Right = document.querySelector(".fa-angle-right");

const home_Img = document.querySelector('.home_Img');
console.log(home_Img)
const home_Title = document.querySelector('.home_Title');


function updateProduct(index) {
    home_Img.src = products[index].imgSrc;
    home_Title.textContent = products[index].brand;
}



arrow_Left.addEventListener("click", () => {
    currentIndex = (currentIndex === 0) ? products.length - 1 : currentIndex - 1;
    
    updateProduct(currentIndex);
});

arrow_Right.addEventListener("click", () => {
    currentIndex = (currentIndex === products.length - 1) ? 0 : currentIndex + 1;
     
    updateProduct(currentIndex);
});

// Initialize with the first product
updateProduct(currentIndex);



