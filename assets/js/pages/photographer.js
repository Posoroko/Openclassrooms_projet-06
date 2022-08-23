import { getPhotographerById, getImagesByPhotographerId } from "../tools/getData.js";
import { photographerInfoNodes } from "../dom/domElements.js"


const params = new URLSearchParams(document.location.search);



const photographerId = params.get('id');
const photographerName = params.get('name');
const images = null;

const photographerInfo = await getPhotographerById(photographerId);
console.log(photographerInfo)

photographerInfoNodes.userName.innerText = photographerInfo.name;
photographerInfoNodes.userLocation.innerText = photographerInfo.city + ", " + photographerInfo.country;
photographerInfoNodes.usertagLine.innerText = photographerInfo.tagline;
photographerInfoNodes.userName.innerText = photographerInfo.name;
photographerInfoNodes.profilePicture.setAttribute('src', "assets/images/Photographers ID Photos/" + photographerInfo.portrait )



document.title = photographerName
