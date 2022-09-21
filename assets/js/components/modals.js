import { modalElements } from "../dom/domElements.js";
import { photographerName } from "../pages/photographer.js";
import { arrayOfMediaCards } from "../tools/filterPhotoCollection.js";

const modals = {
    initiate: () => {

        modalElements.lightbox.leftArrow.addEventListener('click', (e) => {
            console.log('click left');
            navigateMedia(e.target.id);
        });
        modalElements.lightbox.rightArrow.addEventListener('click', (e) => {
            console.log('click right');
            navigateMedia(e.target.id);
        });

        //close when click on close button
        modalElements.closeButtons.forEach(button => {
            button.addEventListener('click', modals.close);
        });

        
   
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

    const keyDownListener = addEventListener('keydown', (e) => {
        console.log(e.code);
        switch(e.code) {
            
            case "ArrowRight":
                navigateMedia(ArrowRight);
            break;

            case "ArrowLeft":
                navigateMedia(ArrowLeft);
            break;
        }
    })

    indexOfCurrentloadedMedia = Array.from(arrayOfMediaCards).indexOf(targetCard);

    console.log(indexOfCurrentloadedMedia);

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

    console.log(direction);

    switch(direction) {

        case "ArrowRight":
            console.log('right');
            indexOfCurrentloadedMedia++;
            toggleArrrows();
            break;

        case "ArrowLeft":
            console.log('left');
            indexOfCurrentloadedMedia--;
            toggleArrrows();
    }

    loadNewMediaInLightbox(arrayOfMediaCards[indexOfCurrentloadedMedia]);
     
}

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

export { modals, openContactModal, openLightbox };