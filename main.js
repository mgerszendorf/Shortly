// MENU BURGER
const menuAnimation = () => {
    const burger = document.querySelector('.burger');
    const menu = document.querySelector('.menu_links');
    const navLinks = document.querySelectorAll('.menu_links li');
    const body = document.querySelector('body');

    burger.addEventListener("click", () => {
        menu.classList.toggle("active_menu");
        body.classList.toggle("active_menu");

        navLinks.forEach((link, index) => {
            if (link.style.animation) {
                link.style.animation = '';
            } else {
                link.style.animation = `navLinkFade 0.5s ease forwards ${index / 7 + 0.3}s`
            }
        });
        burger.classList.toggle('change_burger_icon');
    });
}
menuAnimation();


// ADD LINK APP

const addLinksArea = document.querySelector('.add_links_area');
const submitBtn = document.querySelector('#submit_btn');
let link = document.querySelector('#urlinput');

const addLinkApp = () => {
    submitBtn.addEventListener('click', () => {
        if(link.value){
            link.style.border = "none";
            link.style.backgroundColor = "#fff";
            // ==> Create active link area
            const activeAddedLink = document.createElement('div');
            addLinksArea.appendChild(activeAddedLink);
            activeAddedLink.classList.add('active_added_link');

            // ==> Added the entered link
            const originalLink = document.createElement('div');
            activeAddedLink.appendChild(originalLink);
            originalLink.classList.add('original_link');

            const originalLinkText = document.createElement('p');
            originalLink.appendChild(originalLinkText);
            originalLinkText.textContent = link.value;

            // ==> Added the changed link
            const changedLink = document.createElement('div');
            activeAddedLink.appendChild(changedLink);
            changedLink.classList.add('changed_link');

            const changedLinkText = document.createElement('p');
            changedLink.appendChild(changedLinkText);
            changedLinkText.textContent = 'shortly link soon...';

            // ==> Create copy button
            const copyBtn = document.createElement('button');
            activeAddedLink.appendChild(copyBtn);
            copyBtn.classList.add('copy_button');
            copyBtn.textContent = 'Copy';

            // ==> Delete text in area
            link.value = "";

        } else {
            link.style.border = "3px solid #EB666B";
            link.style.backgroundColor = "#ffb6b7";
        }
    })
}
addLinkApp();

submitBtn.addEventListener('click', function(event) {
    event.preventDefault();
  });
