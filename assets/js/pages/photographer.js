import { getPhotographerById, getMediaByUserId } from "../tools/getData.js";
import { photographerPageNodes } from "../dom/domElements.js";
import { createPhotoCollection } from "../components/photoCollection.js";
import { initiateFilterBox } from "../components/filterBox.js";
import { setLikesAndDailyRates, setAriaLabelForTotalLikes } from "../tools/totalLikesAndDailyRates.js";
import { modals, openContactModal } from "../components/modals.js";

//handle URL parameters

const params = new URLSearchParams(document.location.search);
const photographerId = params.get('id');
const photographerName = params.get('name');

//fetching photographer's data

const photographerInfo = await getPhotographerById(photographerId);
const medias = await getMediaByUserId(photographerId);

// initiate page

photographerPageNodes.contactButton.addEventListener('click', (e) => {
    e.preventDefault();
    openContactModal();
});

photographerPageNodes.userName.innerText = photographerInfo.name;
photographerPageNodes.userLocation.innerText = photographerInfo.city + ", " + photographerInfo.country;
photographerPageNodes.userTagline.innerText = photographerInfo.tagline;
photographerPageNodes.userName.innerText = photographerInfo.name;
photographerPageNodes.profilePicture.setAttribute('src', "../assets/images/Photographers ID Photos/" + photographerInfo.portrait );
photographerPageNodes.profilePicture.setAttribute('alt', photographerInfo.name);
modals.initiate();
initiateFilterBox();
createPhotoCollection(medias, photographerName);
setLikesAndDailyRates(photographerInfo.price, medias);
setAriaLabelForTotalLikes(photographerName)

document.title = photographerName;

export { photographerName }