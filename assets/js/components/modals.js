import { domElements, modalElements } from "../dom/domElements.js";
import { photographerName } from "../pages/photographer.js";
import { arrayOfMediaCards } from "../tools/filterPhotoCollection.js";

const modals = {
    initiate: () => {

        //close when click on close button
        modalElements.closeButtons.forEach(button => {
            button.addEventListener('click', modals.close);
        });

    },

    close: (e) => {

        const modal = e.target.parentElement;

        if(e.target.getAttribute('data-modal') == "lightbox") {

            modal.querySelector('.media').remove();
            toggleLightBoxKeyboardNavigation();
            toggleLightBoxMouseNavigation();
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

    modalElements.contactModal.submitBtn.addEventListener('click', submitForm);
}

const submitForm = (e) => {

    const form = modalElements.contactModal.form;

    e.preventDefault();

    const contactInfo = {
        firstName: form.firstName.value,
        lastName: form.lastName.value,
        email: form.email.value,
        message: form.message.value
    }

    console.table(contactInfo);
    form.reset();
    modalElements.contactModal.dialog.close();
    
}


let indexOfCurrentloadedMedia = null;

const openLightbox = (targetCard) => {

    toggleLightBoxKeyboardNavigation();
    toggleLightBoxMouseNavigation();
    

    indexOfCurrentloadedMedia = Array.from(arrayOfMediaCards).indexOf(targetCard);

    loadNewMediaInLightbox(targetCard);

    toggleArrrows();

    modalElements.lightbox.dialog.showModal();

}

const loadNewMediaInLightbox = (newCard) => {

    const newMedia = newCard.querySelector('.media').cloneNode(true);

    if(newCard.getAttribute('data-media')) {
        toggleVideoControls(newMedia);
    }

    //check if lightbox is already on
    if( modalElements.lightbox.dialog.querySelector('.media')) {
        
        modalElements.lightbox.dialog.querySelector('.media').replaceWith(newMedia);

    } else {
        
        modalElements.lightbox.frame.appendChild(newMedia);
    
    }

    modalElements.lightbox.title.innerText = newCard.getAttribute("data-title");
}   

const navigateMedia = (direction) => {

     console.log('eric');
    
    switch(direction) {

        case "ArrowRight":

            if(indexOfCurrentloadedMedia + 1 >= arrayOfMediaCards.length) {
                // navigation is out of bounds
                return;
            }
            
            indexOfCurrentloadedMedia++;
            toggleArrrows();
            break;

        case "ArrowLeft":

            if(indexOfCurrentloadedMedia -1 < 0) {
                // navigation is out of bounds
                return;
            }

            indexOfCurrentloadedMedia--;
            toggleArrrows();
    }

    loadNewMediaInLightbox(arrayOfMediaCards[indexOfCurrentloadedMedia]);
     
}

//handling the display of left and right arrows

const toggleArrrows = () => {

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

const toggleVideoControls = (video) => {
    video.controls = !video.controls;
}



const toggleLightBoxMouseNavigation = () => {

    if(modalElements.lightbox.dialog.open) {
        modalElements.lightbox.leftArrow.removeEventListener('click', (e) => {
            navigateMedia(e.target.id);
        });


        modalElements.lightbox.rightArrow.removeEventListener('click', (e) => {
            navigateMedia(e.target.id);
        });

        return;

    }

    modalElements.lightbox.leftArrow.addEventListener('click', (e) => {
        navigateMedia(e.target.id);
    });

    modalElements.lightbox.rightArrow.addEventListener('click', (e) => {
        navigateMedia(e.target.id);
    });

}

const toggleLightBoxKeyboardNavigation = () => {

    if(modalElements.lightbox.dialog.open) {
        console.log('overt here!');
        
        
        document.removeEventListener('keydown', handleKeyDown);

        return;

    }

    document.addEventListener('keydown', handleKeyDown);

}

const handleKeyDown = (e) => {

    switch(e.code) {
            
        case "ArrowRight":
            navigateMedia('ArrowRight');
        break;

        case "ArrowLeft":
            navigateMedia('ArrowLeft');
        break;
    }
}

export { modals, openContactModal, openLightbox };