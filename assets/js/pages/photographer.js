import { getData, getPhotographerById, getMediaByUserId } from "../tools/getData.js";
import { photographerPageNodes } from "../dom/domElements.js"


const params = new URLSearchParams(document.location.search);



const photographerId = params.get('id');
const photographerName = params.get('name');
const images = null;

const photographerInfo = await getPhotographerById(photographerId);

photographerPageNodes.userName.innerText = photographerInfo.name;
photographerPageNodes.userLocation.innerText = photographerInfo.city + ", " + photographerInfo.country;
photographerPageNodes.usertagLine.innerText = photographerInfo.tagline;
photographerPageNodes.userName.innerText = photographerInfo.name;
photographerPageNodes.profilePicture.setAttribute('src', "assets/images/Photographers ID Photos/" + photographerInfo.portrait )


const media = await getMediaByUserId(photographerId);

const initiatePage = (media) => {

}
getData('photographers');
document.title = photographerName
