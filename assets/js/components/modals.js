import { modalElements } from "../dom/domElements.js";
import { photographerName } from "../pages/photographer.js";

const modals = {
    initiate: () => {

        //close when click on close button
        modalElements.closeButtons.forEach(button => {
            button.addEventListener('click', modals.close);
        });

        //close modal when clicking on backdrop
        modalElements.dialogs.forEach(dialog => {
            
            dialog.addEventListener('click', (e) => {
                let rect = dialog.getBoundingClientRect();
                let isInDialog=(rect.top <= e.clientY && e.clientY <= rect.top + rect.height
                  && rect.left <= e.clientX && e.clientX <= rect.left + rect.width);
                if (!isInDialog) {
                    modals.close(e);
                }
            });
        })      
    },

    close: (e) => {

        if(e.target.getAttribute('data-modal') == "mediaModal") {
            document.getElementById('mediaNode').remove();
        }
        console.log(e.target);
        document.getElementById(e.target.getAttribute('data-modal')).close();
        document.getElementsByTagName('html')[0].style.overflow = "scroll";
        modalElements.contactModal.form.reset();
    },

}

const openContactModal = () => {
    modalElements.contactModal.dialog.showModal();
    modalElements.contactModal.name.innerText = photographerName;
    document.getElementsByTagName('html')[0].style.overflow = "hidden";
}

const openMediaModal = (importedNode) => {
    let node = importedNode;
    node.id = "mediaNode";
    document.getElementById('mediaBox').appendChild(node);
    modalElements.mediaModal.dialog.showModal()
}


export { modals, openContactModal, openMediaModal };