const domElements = {
    photographer_section: document.getElementById('photographer_section'),
}

const photographerPageNodes = {
    photographerPageHeader: document.getElementById('photographerPageHeader'),
    userName: document.getElementById('userName'),
    userLocation: document.getElementById('userLocation'),
    usertagLine: document.getElementById('usertagLine'),
    profilePicture: document.getElementById('profilePicture'),
    photoCollection: document.getElementById('photoCollection'),
    totalLikes: document.getElementById('totalLikes'),
    dailyRate: document.getElementById('dailyRate'),
    contactButton: document.getElementById('contact_button')
};

const filterBoxNodes = {
    dropDown: document.getElementById('filterDropDownMenu'),
    chevron: document.getElementById('expandMore'),
    filter_likes: document.getElementById('filter_likes'),
    filter_date: document.getElementById('filter_date'),
    filter_title: document.getElementById('filter_title')
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
        form: document.getElementById('contactForm')
    },
    mediaModal: {
        dialog: document.getElementById('mediaModal'),
        mediaBox: document.getElementById('mediaBox')
    }
}


export { domElements, photographerPageNodes, filterBoxNodes, modalElements }