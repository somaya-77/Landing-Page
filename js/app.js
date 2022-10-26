/**
 * 
 * Manipulating the DOM exercise.
 * Exercise programmatically builds navigation,
 * scrolls to anchors from navigation,
 * and highlights section in viewport upon scrolling.
 * 
 * Dependencies: None
 * 
 * JS Version: ES2015/ES6
 * 
 * JS Standard: ESlint
 * 
*/

/**
 * Comments should be present at the beginning of each procedure and class.
 * Great to have comments before crucial code sections within the procedure.
*/

/**
 * Define Global Variables
 * 
*/


/**
 * End Global Variables
 * Start Helper Functions
 * 
*/



/**
 * End Helper Functions
 * Begin Main Functions
 * 
*/

// build the nav


// Add class 'active' to section when near top of viewport


// Scroll to anchor ID using scrollTO event


/**
 * End Main Functions
 * Begin Events
 * 
*/

// Build menu 

// Scroll to section on link click

// Set sections as active



//=============================================================================================
// get All section 
const sections = Array.from(document.querySelectorAll('section'));
// get ul
const listMenu = document.getElementById("navbar__list");
// set li , a link
function createList() {
    for (sec of sections) {
        listItem = document.createElement("li");
        listItem.innerHTML = `<a href="#${sec.id}" data-list="${sec.id}" class="menu__link">${sec.dataset.nav}</a>`;
        listMenu.appendChild(listItem);
    }
}
createList();
//add && remove class active
window.onscroll = function () {
    document.querySelectorAll("section").forEach(function (activee) {
        if (
            activee.getBoundingClientRect().top > -800 &&
            activee.getBoundingClientRect().top < 150) {
            activee.classList.add("your-active");

        } else {
            activee.classList.remove("your-active");

        }
    });
};

//**************************************************************************************** */

listMenu.addEventListener("click", (goSection) => {
    goSection.preventDefault();
    if (goSection.target.dataset.list) {
        document.getElementById(`${goSection.target.dataset.list}`).scrollIntoView({ behavior: "smooth" });
        setTimeout(() => {
            location.hash = `${goSection.target.dataset.list}`;
        }, 1000);
    }
});
//************************************************************************************* */















