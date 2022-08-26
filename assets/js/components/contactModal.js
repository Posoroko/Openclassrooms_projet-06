import { contactModal } from "../dom/domElements.js";
import { photographerName } from "../pages/photographer.js";

const modal = {
    initiate: () => {

        contactModal.closeButton.addEventListener('click', modal.close);

        contactModal.dialog.addEventListener('click', (e) => {
            let rect = contactModal.dialog.getBoundingClientRect();
            let isInDialog=(rect.top <= e.clientY && e.clientY <= rect.top + rect.height
              && rect.left <= e.clientX && e.clientX <= rect.left + rect.width);
            if (!isInDialog) {
                modal.close();
            }
        });
    },

    open: () => {
        contactModal.dialog.showModal();
        contactModal.name.innerText = photographerName;
        document.getElementsByTagName('html')[0].style.overflow = "hidden";
    },

    close: () => {
        contactModal.dialog.close();
        document.getElementsByTagName('html')[0].style.overflow = "scroll";
        contactModal.form.reset();
    }
}



export { modal }