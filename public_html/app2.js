//nav bar
//getting the content
const menuBtn = document.querySelector(".menu-btn");
const menu = document.querySelector(".menu");

//Making a click even for the menu button
menuBtn.addEventListener('click', () => {
    //toggling the menu-open class when button is pressed
    menu.classList.toggle('menu-open');
});
