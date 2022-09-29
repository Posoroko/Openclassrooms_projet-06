import { filterBoxNodes } from "../dom/domElements.js";
import { filterPhotoCollection } from "../tools/filterPhotoCollection.js"

let isMenuOpen = false;

const handleClick = (e) => {
    const choice = e.currentTarget;

    if(!isMenuOpen) {
        openMenu();
        
        return;
    }

    changeOrderOfFilterOptions(choice);
    closeMenu();
    filterPhotoCollection(choice.id);
}

const handleChange = (value) => {
    filterPhotoCollection(value);
}


const closeMenu = () => {
    if(isMenuOpen) {
        filterBoxNodes.dropDown.style.height = filterBoxNodes.dropDown.firstElementChild.offsetHeight + "px";
        rotateChevron();
        isMenuOpen = false;
    }
}

const openMenu = () => {
    filterBoxNodes.dropDown.style.height = "";
    rotateChevron();
    isMenuOpen = true;
}

const changeOrderOfFilterOptions = (node) => {
    node.parentElement.insertBefore(node, node.parentElement.firstChild)
}

const rotateChevron = () => {
    if (filterBoxNodes.chevron.classList.contains('arrowDown')) {
        filterBoxNodes.chevron.classList.replace("arrowDown", "arrowUp");
        return
    }
    filterBoxNodes.chevron.classList.replace("arrowUp", "arrowDown");
}

const initiateFilterBox = () => {

    filterBoxNodes.dropDown.addEventListener('change', (e) => {
        handleChange(e.target.value);    
    })
    filterBoxNodes.dropDown.addEventListener('mouseleave', closeMenu);
    
    filterBoxNodes.filter_likes.addEventListener('click', handleClick);
    filterBoxNodes.filter_date.addEventListener('click', handleClick);
    filterBoxNodes.filter_title.addEventListener('click', handleClick);

    filterBoxNodes.dropDown.style.height = filterBoxNodes.dropDown.firstElementChild.offsetHeight + "px";
    filterBoxNodes.dropDown.style.left = filterBoxNodes.dropDown.parentElement.firstElementChild.offsetWidth + "px";
}

export { initiateFilterBox }