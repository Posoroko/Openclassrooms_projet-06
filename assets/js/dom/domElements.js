const domElements = {
    photographer_section: document.getElementById('photographer_section'),
}

const photographerPageNodes = {
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

const contactModal = {
    dialog: document.getElementById('contact_modal'),
    closeButton: document.getElementById('closeModalButton'),
    name: document.getElementById('photographerName'),
    submit: document.getElementById('submitButton'),
    form: document.getElementById('contactForm')
}


export { domElements, photographerPageNodes, filterBoxNodes, contactModal }