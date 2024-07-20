const mainToggle = document.getElementById("menu-btn");
console.log(mainToggle);
const navBar = document.querySelector(".navbar");

mainToggle.addEventListener("click", (e) => {
    console.log(mainToggle);
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