const domElements = {
    photographer_section: document.getElementById('photographer_section'),
}

const photographerPageNodes = {
    photographerPageHeader: document.getElementById('photographerPageHeader'),
    userName: document.getElementById('userName'),
    userLocation: document.getElementById('userLocation'),
    userTagline: document.getElementById('userTagline'),
    profilePicture: document.getElementById('profilePicture'),
    photoCollection: document.getElementById('photoCollection'),
    totalLikes: document.getElementById('totalLikes'),
    dailyRate: document.getElementById('dailyRate'),
    contactButton: document.getElementById('contact_button')
};

const filterBoxNodes = {
    dropDown: document.getElementById('filterDropDownMenu'),
    chevron: document.getElementById('expandMore'),
    filter_likes: document.getElementById('filterBox-1'),
    filter_date: document.getElementById('filterBox-2'),
    filter_title: document.getElementById('filterBox-3')
}

const mediaModal = {
    dialog: document.getElementById('mediaModal'),
    box: document.getElementById('mediaBox')
}

const modalElements = {
    dialogs: document.querySelectorAll('.modal'),
    closeButtons: document.querySelectorAll('.closeButton'),
    contactModal: {
        dialog: document.getElementById('contactModal'),
        name: document.getElementById('photographerName'),
        submit: document.getElementById('submitButton'),
        form: document.getElementById('contactForm'),
        submitBtn: document.getElementById('contactFormSubmitBtn'),
    },
    mediaModal: {
        dialog: document.getElementById('mediaModal'),
        mediaBox: document.getElementById('mediaBox')
    },
    lightbox: {
        dialog: document.getElementById('lightbox'),
        image: document.getElementById('lightboxImg'),
        frame: document.getElementById('lightboxFrame'),
        title: document.getElementById('lightboxTitle'),
        close: document.getElementById('closeLightboxButton'),
        rightArrow: document.getElementById('ArrowRight'),
        leftArrow: document.getElementById('ArrowLeft'),
    }
}


export { domElements, photographerPageNodes, filterBoxNodes, modalElements }