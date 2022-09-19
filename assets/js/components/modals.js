import { modalElements } from "../dom/domElements.js";
import { photographerName } from "../pages/photographer.js";
import { arrayOfMediaCards } from "../tools/filterPhotoCollection.js";

const modals = {
    initiate: () => {

        modalElements.lightbox.leftArrow.addEventListener('click', navigateMedia);
        modalElements.lightbox.rightArrow.addEventListener('click', navigateMedia);

        //close when click on close button
        modalElements.closeButtons.forEach(button => {
            button.addEventListener('click', modals.close);
        });

        //close modal when clicking on backdrop
        // modalElements.dialogs.forEach(dialog => {
            
        //     dialog.addEventListener('click', (e) => {
        //         let rect = dialog.getBoundingClientRect();
        //         let isInDialog=(rect.top <= e.clientY && e.clientY <= rect.top + rect.height
        //           && rect.left <= e.clientX && e.clientX <= rect.left + rect.width);
        //         if (!isInDialog) {
        //             modals.close(e);
        //         }
        //     });
        // })      
    },

    close: (e) => {

        const modal = e.target.parentElement;
        if(e.target.getAttribute('data-modal') == "lightbox") {


            modal.querySelector('.media').remove();
        }

        document.getElementById(e.target.getAttribute('data-modal')).close();

        //set scrolling back
        document.getElementsByTagName('html')[0].style.overflow = "scroll";
        modalElements.contactModal.form.reset();
    },

}

const openContactModal = () => {
    modalElements.contactModal.dialog.showModal();
    modalElements.contactModal.name.innerText = photographerName;

    //prevent scrolling behind the modal
    document.getElementsByTagName('html')[0].style.overflow = "hidden";
}



let indexOfCurrentloadedMedia = null;

const openLightbox = (targetCard) => {

    indexOfCurrentloadedMedia = Array.from(arrayOfMediaCards).indexOf(targetCard);

    loadNewMediaInLightbox(targetCard);

    toggleArrrows();

    modalElements.lightbox.dialog.showModal();
}

const loadNewMediaInLightbox = (newCard) => {

    const newMedia = newCard.querySelector('.media').cloneNode();

    //check if lightbox is already on
    if( modalElements.lightbox.dialog.querySelector('.media')) {
        
        modalElements.lightbox.dialog.querySelector('.media').replaceWith(newMedia);

    } else {
        
        modalElements.lightbox.frame.appendChild(newMedia);
    
    }

    modalElements.lightbox.title.innerText = newCard.getAttribute("data-title");
}   




const navigateMedia = (e) => {

    switch(e.target.id) {

        case "rightArrow":

            indexOfCurrentloadedMedia++;
            toggleArrrows();
            break;

        case "leftArrow":

            indexOfCurrentloadedMedia--;
            toggleArrrows();
    }

    loadNewMediaInLightbox(arrayOfMediaCards[indexOfCurrentloadedMedia]);
     
}

const toggleArrrows = () => {

    console.log(arrayOfMediaCards.length);
    console.log(indexOfCurrentloadedMedia);

    if(indexOfCurrentloadedMedia > 0 && indexOfCurrentloadedMedia < arrayOfMediaCards.length - 1) {
        
        modalElements.lightbox.leftArrow.classList.replace('arrowOff', 'arrowOn');
        modalElements.lightbox.rightArrow.classList.replace('arrowOff', 'arrowOn');

        return;
    }
    if(indexOfCurrentloadedMedia == 0) {
        
        modalElements.lightbox.leftArrow.classList.replace('arrowOn', 'arrowOff');
        
    }
    if(indexOfCurrentloadedMedia == arrayOfMediaCards.length - 1) {

        modalElements.lightbox.rightArrow.classList.replace('arrowOn', 'arrowOff');

    }

}
export { modals, openContactModal, openLightbox };